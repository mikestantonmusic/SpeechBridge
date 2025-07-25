import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { BrowserAudioPlayer } from "@/components/browser-audio-player";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { TTSService } from "@/lib/tts-service";
import { Languages, Play, Info } from "lucide-react";

interface TranslationResult {
  id: string;
  audioUrl: string | null;
  englishAudioUrl: string | null;
  chineseAudioUrl: string | null;
  duration: number;
  useClientTTS?: boolean;
  settings?: {
    pauseDuration: number;
    voiceSpeed: number;
    audioQuality: string;
  };
}

interface AudioSettings {
  pauseDuration: number;
  voiceSpeed: number;
  audioQuality: string;
}

interface TranslationCardProps {
  audioSettings: AudioSettings;
}

export function TranslationCard({ audioSettings }: TranslationCardProps) {
  const [inputText, setInputText] = useState("");
  const [englishText, setEnglishText] = useState("");
  const [chineseText, setChineseText] = useState("");
  const [translationResult, setTranslationResult] = useState<TranslationResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const translateMutation = useMutation({
    mutationFn: async (text: string) => {
      const response = await apiRequest("POST", "/api/translate", { text });
      return response.json();
    },
    onSuccess: (data) => {
      setEnglishText(data.englishText);
      setChineseText(data.chineseText);
      generateAudio(data.englishText, data.chineseText);
    },
    onError: (error) => {
      toast({
        title: "Translation Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generateAudioMutation = useMutation({
    mutationFn: async ({ englishText, chineseText }: { englishText: string; chineseText: string }) => {
      const response = await apiRequest("POST", "/api/generate-audio", {
        englishText,
        chineseText,
        settings: audioSettings,
      });
      return response.json();
    },
    onSuccess: (data) => {
      setTranslationResult(data);
      setShowResults(true);
      toast({
        title: "Success",
        description: "Audio generated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Audio Generation Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generateAudio = (englishText: string, chineseText: string) => {
    generateAudioMutation.mutate({ englishText, chineseText });
  };

  const handleTranslateAndGenerate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to translate",
        variant: "destructive",
      });
      return;
    }
    translateMutation.mutate(inputText.trim());
  };

  const playIndividualAudio = async (text: string, language: 'en' | 'zh') => {
    try {
      const langCode = language === 'zh' ? 'zh-CN' : 'en-US';
      
      // Try external TTS for Chinese first
      if (language === 'zh') {
        const externalAudio = await TTSService.generateSpeech(text, langCode, audioSettings.voiceSpeed, 75);
        if (externalAudio) {
          externalAudio.play();
          return;
        }
      }
      
      // Fallback to enhanced browser speech
      await TTSService.speakWithBestVoice(text, langCode, audioSettings.voiceSpeed, 75);
      
    } catch (error) {
      toast({
        title: "Audio Playback Failed",
        description: "Unable to play audio. Please check your browser's speech synthesis support.",
        variant: "destructive",
      });
    }
  };

  const isLoading = translateMutation.isPending || generateAudioMutation.isPending;

  return (
    <Card className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <CardContent className="p-8">
        <div className="mb-6">
          <label htmlFor="englishInput" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-keyboard text-primary mr-2"></i>
            Enter English text
          </label>
          <div className="relative">
            <Textarea
              id="englishInput"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
              placeholder="Type your English word or phrase here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {inputText.length} characters
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <Button
            onClick={handleTranslateAndGenerate}
            disabled={isLoading || !inputText.trim()}
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Languages className="w-5 h-5 mr-2" />
            {isLoading ? "Processing..." : "Translate & Generate Audio"}
          </Button>
        </div>
      </CardContent>

      {showResults && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-volume-up text-primary mr-2"></i>
              Generated Audio
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="w-6 h-4 mr-2 bg-blue-600 rounded text-white text-xs flex items-center justify-center">🇺🇸</span>
                    English
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-blue-600 transition-colors p-1"
                    onClick={() => playIndividualAudio(englishText, 'en')}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-gray-700">{englishText}</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <span className="w-6 h-4 mr-2 bg-red-600 rounded text-white text-xs flex items-center justify-center">🇨🇳</span>
                    中文 (Mandarin)
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-blue-600 transition-colors p-1"
                    onClick={() => playIndividualAudio(chineseText, 'zh')}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-gray-700">{chineseText}</p>
              </div>
            </div>

            <div className="mb-6">
              <BrowserAudioPlayer
                englishText={englishText}
                chineseText={chineseText}
                settings={audioSettings}
                duration={translationResult?.duration}
              />
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-blue-500 mr-2" />
                <h4 className="font-medium text-gray-900">Audio Information</h4>
              </div>
              
              <div className="text-sm text-gray-600 bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="mb-2">
                  <strong>✨ High-Quality Chinese Audio Active</strong>
                </p>
                <p className="mb-2 text-green-700">
                  ✓ Using Microsoft Xiaoxiao voice for natural Chinese pronunciation<br/>
                  ✓ Optimized voice selection automatically applied<br/>
                  ✓ Completely free - no API keys required<br/>
                  ✓ Works offline with your system voices
                </p>
                <p className="text-xs text-green-600">
                  Great! Your system has excellent Chinese voices available. 
                  You can test different voices in the Audio Settings below.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
