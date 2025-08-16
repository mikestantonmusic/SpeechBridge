import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, BookOpen, CheckCircle, Circle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AudioManager } from "@/lib/audio-manager";
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
  const [audioState, setAudioState] = useState(AudioManager.getState());
  const { toast } = useToast();

  // Subscribe to audio manager state changes
  useEffect(() => {
    const unsubscribe = AudioManager.subscribe(setAudioState);
    return unsubscribe;
  }, []);

  const isLearned = group.isLearned === 1;
  const isThisGroupPlaying = audioState.isPlaying && audioState.currentGroupId === group.id;

  const handlePlayPause = async () => {
    if (isThisGroupPlaying) {
      // Stop current playback
      AudioManager.stopAudio();
    } else {
      // Start playback for this group
      if (words.length === 0) {
        toast({
          title: "No Words Available",
          description: "This group doesn't have any words to play.",
          variant: "destructive",
        });
        return;
      }
      
      try {
        await AudioManager.startGroupPlayback(group.id);
      } catch (error) {
        console.error('Error starting playback:', error);
        toast({
          title: "Playback Error",
          description: "Could not start audio playback.",
          variant: "destructive",
        });
      }
    }
  };

  const toggleLearned = () => {
    onToggleLearned(group.id, !isLearned);
  };

  const getPhaseText = () => {
    if (audioState.currentPhase === "idle") return "Ready";
    if (audioState.currentPhase === "english") return "English";
    if (audioState.currentPhase === "chinese") return "中文 (1st)";
    if (audioState.currentPhase === "chinese2") return "中文 (2nd)";
    if (audioState.currentPhase === "pause") return "Pause";
    return "Ready";
  };

  const getCurrentWord = () => {
    if (isThisGroupPlaying && audioState.currentWordIndex < words.length) {
      return words[audioState.currentWordIndex];
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
            {!isThisGroupPlaying ? (
              <Button
                onClick={handlePlayPause}
                size="sm"
                className="text-xs px-3 py-1.5"
                disabled={words.length === 0}
              >
                <Play className="w-3 h-3 mr-1" />
                Start Learning
              </Button>
            ) : (
              <Button
                onClick={handlePlayPause}
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
        {isThisGroupPlaying && currentWord && (
          <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-200">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium text-blue-700">
                Word {audioState.currentWordIndex + 1}/{words.length}
              </span>
              <Badge variant="outline" className="text-xs py-0 px-1">
                {getPhaseText()}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className={`text-sm font-medium ${audioState.currentPhase === 'english' ? 'text-blue-600' : 'text-gray-800'}`}>
                  {currentWord.englishText}
                </div>
              </div>
              <div className="text-center">
                <div className={`text-sm font-medium ${(audioState.currentPhase === 'chinese' || audioState.currentPhase === 'chinese2') ? 'text-blue-600' : 'text-gray-800'}`}>
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