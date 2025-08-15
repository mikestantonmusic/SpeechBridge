import { useState, useRef, useEffect } from "react";
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
  const [currentPhase, setCurrentPhase] = useState<"idle" | "english" | "pause" | "chinese" | "chinese2">("idle");
  const isPlayingRef = useRef(false);
  const { toast } = useToast();

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const isLearned = group.isLearned === 1;

  const playWordSequence = async () => {
    if (words.length === 0) return;

    try {
      console.log('Starting audio playback for', words.length, 'words');
      setIsPlaying(true);
      setCurrentWordIndex(0);

      // Initialize voices first
      await TTSService.initializeVoices();

      // Continuous loop until user stops
      while (isPlayingRef.current) {
        console.log('Starting new loop cycle');
        
        for (let i = 0; i < words.length; i++) {
        // Check if user stopped playback
        if (!isPlayingRef.current) {
          console.log('Playback stopped by user at word', i);
          break;
        }

        setCurrentWordIndex(i);
        const word = words[i];
        
        // Randomly choose pattern for each word: 50% chance for each
        const useEnglishFirst = Math.random() < 0.5;
        console.log('Playing word:', word.englishText, '/', word.chineseText, '(' + word.pinyinText + ')', 
                   '- Pattern:', useEnglishFirst ? 'English → Chinese → Chinese' : 'Chinese → Chinese → English');

        if (useEnglishFirst) {
          // Pattern: English → Chinese → Chinese
          
          // Play English first
          setCurrentPhase("english");
          try {
            await TTSService.speakWithBestVoice(word.englishText, 'en-US', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for English:', speechError);
          }
          
          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Pause before first Chinese
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, audioSettings.pauseDuration * 1000));
          
          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Play Chinese first time
          setCurrentPhase("chinese");
          try {
            await TTSService.speakWithBestVoice(word.chineseText, 'zh-CN', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for Chinese (first):', speechError);
          }

          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Pause before second Chinese
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, audioSettings.pauseDuration * 1000));
          
          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Play Chinese second time
          setCurrentPhase("chinese2");
          try {
            await TTSService.speakWithBestVoice(word.chineseText, 'zh-CN', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for Chinese (second):', speechError);
          }
          
        } else {
          // Pattern: Chinese → Chinese → English
          
          // Play Chinese first time
          setCurrentPhase("chinese");
          try {
            await TTSService.speakWithBestVoice(word.chineseText, 'zh-CN', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for Chinese (first):', speechError);
          }

          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Pause before second Chinese
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, audioSettings.pauseDuration * 1000));
          
          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Play Chinese second time
          setCurrentPhase("chinese2");
          try {
            await TTSService.speakWithBestVoice(word.chineseText, 'zh-CN', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for Chinese (second):', speechError);
          }

          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Pause before English
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, audioSettings.pauseDuration * 1000));
          
          // Check if user stopped playback
          if (!isPlayingRef.current) break;

          // Play English last
          setCurrentPhase("english");
          try {
            await TTSService.speakWithBestVoice(word.englishText, 'en-US', audioSettings.voiceSpeed, 75);
          } catch (speechError) {
            console.error('Speech error for English:', speechError);
          }
        }

        // Longer break between words (2 seconds)
        if (i < words.length - 1 && isPlayingRef.current) {
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

        // Short break between complete cycles (1 second)
        if (isPlayingRef.current) {
          setCurrentPhase("pause");
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      console.log('Audio playback completed');
      setIsPlaying(false);
      setCurrentPhase("idle");
      setCurrentWordIndex(0);

    } catch (error) {
      console.error("Playback error:", error);
      setIsPlaying(false);
      setCurrentPhase("idle");
      setCurrentWordIndex(0);
      toast({
        title: "Audio Playback Failed",
        description: "Unable to play audio. Please check your browser's speech synthesis support.",
        variant: "destructive",
      });
    }
  };

  const stopPlayback = () => {
    console.log('Stopping audio playback');
    TTSService.stopSpeech();
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
    if (currentPhase === "chinese") return "中文 (1st)";
    if (currentPhase === "chinese2") return "中文 (2nd)";
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
      <CardContent className="p-3">
        {/* Header with Start Learning button inline */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{group.title}</h3>
              <p className="text-xs text-gray-600">{group.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant={isLearned ? "default" : "secondary"} className="text-xs px-2 py-0.5">
              {words.length} words
            </Badge>
            {!isPlaying ? (
              <Button
                onClick={playWordSequence}
                size="sm"
                className="text-xs px-3 py-1.5"
                disabled={words.length === 0}
              >
                <Play className="w-3 h-3 mr-1" />
                Start Learning
              </Button>
            ) : (
              <Button
                onClick={stopPlayback}
                variant="destructive"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                <Square className="w-3 h-3 mr-1" />
                Stop
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLearned}
              className={`p-1.5 ${isLearned ? 'text-green-600 hover:text-green-700' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {isLearned ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Current Word Display - Only when playing */}
        {isPlaying && currentWord && (
          <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-200">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium text-blue-700">
                Word {currentWordIndex + 1}/{words.length}
              </span>
              <Badge variant="outline" className="text-xs py-0 px-1">
                {getPhaseText()}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className={`text-sm font-medium ${currentPhase === 'english' ? 'text-blue-600' : 'text-gray-800'}`}>
                  {currentWord.englishText}
                </div>
              </div>
              <div className="text-center">
                <div className={`text-sm font-medium ${(currentPhase === 'chinese' || currentPhase === 'chinese2') ? 'text-blue-600' : 'text-gray-800'}`}>
                  {currentWord.chineseText}
                </div>
                <div className="text-xs text-gray-500">
                  {currentWord.pinyinText}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}