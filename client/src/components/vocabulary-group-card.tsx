import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, BookOpen, CheckCircle, Circle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TTSService } from "@/lib/tts-service";
import type { WordGroup, VocabularyWord, AudioSettings } from "@shared/schema";

interface VocabularyGroupCardProps {
  group: WordGroup;
  words: VocabularyWord[];
  audioSettings: AudioSettings;
  onToggleLearned: (groupId: string, isLearned: boolean) => void;
}

export function VocabularyGroupCard({ 
  group, 
  words, 
  audioSettings,
  onToggleLearned 
}: VocabularyGroupCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<"idle" | "english" | "pause" | "chinese">("idle");
  const { toast } = useToast();

  const isLearned = group.isLearned === 1;

  const playWordSequence = async () => {
    if (words.length === 0) return;

    try {
      setIsPlaying(true);
      setCurrentWordIndex(0);

      for (let i = 0; i < words.length && isPlaying; i++) {
        setCurrentWordIndex(i);
        const word = words[i];

        // Determine language order
        const isChineseFirst = audioSettings.languageOrder === 'chinese-first';
        const firstText = isChineseFirst ? word.chineseText : word.englishText;
        const firstLang = isChineseFirst ? 'zh-CN' : 'en-US';
        const secondText = isChineseFirst ? word.englishText : word.chineseText;
        const secondLang = isChineseFirst ? 'en-US' : 'zh-CN';

        // Play first language
        setCurrentPhase(isChineseFirst ? "chinese" : "english");
        await TTSService.speakWithBestVoice(firstText, firstLang, audioSettings.voiceSpeed, 75);
        
        if (!isPlaying) break;

        // Pause
        setCurrentPhase("pause");
        await new Promise(resolve => setTimeout(resolve, audioSettings.pauseDuration * 1000));
        
        if (!isPlaying) break;

        // Play second language
        setCurrentPhase(isChineseFirst ? "english" : "chinese");
        await TTSService.speakWithBestVoice(secondText, secondLang, audioSettings.voiceSpeed, 75);

        // Short break between words (0.5 seconds)
        if (i < words.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      setIsPlaying(false);
      setCurrentPhase("idle");
      setCurrentWordIndex(0);

    } catch (error) {
      console.error("Playback error:", error);
      setIsPlaying(false);
      setCurrentPhase("idle");
      toast({
        title: "Audio Playback Failed",
        description: "Unable to play audio. Please check your browser's speech synthesis support.",
        variant: "destructive",
      });
    }
  };

  const stopPlayback = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentPhase("idle");
    setCurrentWordIndex(0);
  };

  const toggleLearned = () => {
    onToggleLearned(group.id, !isLearned);
  };

  const getPhaseText = () => {
    if (currentPhase === "idle") return "Ready";
    if (currentPhase === "english") return "English";
    if (currentPhase === "chinese") return "中文";
    if (currentPhase === "pause") return "Pause";
    return "";
  };

  const getCurrentWord = () => {
    if (currentWordIndex < words.length) {
      return words[currentWordIndex];
    }
    return null;
  };

  const currentWord = getCurrentWord();

  return (
    <Card className={`w-full transition-all duration-200 ${isLearned ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{group.title}</h3>
              <p className="text-sm text-gray-600">{group.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={isLearned ? "default" : "secondary"} className="text-xs">
              {words.length} words
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLearned}
              className={`p-2 ${isLearned ? 'text-green-600 hover:text-green-700' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {isLearned ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Current Word Display */}
        {isPlaying && currentWord && (
          <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-700">
                Word {currentWordIndex + 1} of {words.length}
              </span>
              <Badge variant="outline" className="text-xs">
                {getPhaseText()}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">English</div>
                <div className={`text-lg font-medium ${currentPhase === 'english' ? 'text-blue-600' : 'text-gray-800'}`}>
                  {currentWord.englishText}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">中文</div>
                <div className={`text-lg font-medium ${currentPhase === 'chinese' ? 'text-blue-600' : 'text-gray-800'}`}>
                  {currentWord.chineseText}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-3">
          {!isPlaying ? (
            <Button
              onClick={playWordSequence}
              className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              disabled={words.length === 0}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
          ) : (
            <Button
              onClick={stopPlayback}
              variant="destructive"
              className="inline-flex items-center px-6 py-2"
            >
              <Square className="w-4 h-4 mr-2" />
              Stop
            </Button>
          )}
        </div>

        {/* Learning Status */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Status: {isLearned ? "Learned ✓" : "Not learned"}
            </span>
            <span className="text-gray-500">
              Audio Order: {audioSettings.languageOrder === 'chinese-first' ? 'Chinese → English' : 'English → Chinese'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}