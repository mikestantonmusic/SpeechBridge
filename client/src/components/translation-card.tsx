import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AudioPlayer } from "@/components/ui/audio-player";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Languages, Play, Download, FileAudio } from "lucide-react";

interface TranslationResult {
  id: string;
  audioUrl: string;
  englishAudioUrl: string;
  chineseAudioUrl: string;
  duration: number;
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

  const handleDownload = async (format: "mp3" | "wav") => {
    if (!translationResult) return;
    
    try {
      const response = await fetch(translationResult.audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `translation.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Download Started",
        description: `Downloading ${format.toUpperCase()} file...`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download audio file",
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
                    onClick={() => {
                      if (translationResult?.englishAudioUrl) {
                        const audio = new Audio(translationResult.englishAudioUrl);
                        audio.play();
                      }
                    }}
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
                    onClick={() => {
                      if (translationResult?.chineseAudioUrl) {
                        const audio = new Audio(translationResult.chineseAudioUrl);
                        audio.play();
                      }
                    }}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-gray-700">{chineseText}</p>
              </div>
            </div>

            <div className="mb-6">
              <AudioPlayer
                audioUrl={translationResult?.audioUrl}
                duration={translationResult?.duration}
              />
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                <Download className="w-5 h-5 text-primary mr-2" />
                Download Options
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleDownload("mp3")}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileAudio className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="font-medium">Download MP3</span>
                  <span className="ml-2 text-xs text-gray-500">(Higher quality)</span>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => handleDownload("wav")}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileAudio className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="font-medium">Download WAV</span>
                  <span className="ml-2 text-xs text-gray-500">(Uncompressed)</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
