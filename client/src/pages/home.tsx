import { useState, useEffect } from "react";
import { VocabularyGroupCard } from "@/components/vocabulary-group-card";
import { SettingsCard } from "@/components/settings-card";
import { PlaybackModeSelector } from "@/components/playback-mode-selector";
import { useToast } from "@/hooks/use-toast";
import VocabularyService from "@/services/VocabularyService";
import { AudioManager } from "@/lib/audio-manager";
import { Languages, BookOpen } from "lucide-react";
import type { VocabularyWord, WordGroup } from "@/data/vocabulary";

export default function Home() {
  const [audioSettings, setAudioSettings] = useState({
    pauseDuration: 1.0,
    voiceSpeed: 1.0,
    audioQuality: "high",
    languageOrder: "english-first",
  });

  const [groupWords, setGroupWords] = useState<Record<string, any[]>>({});
  const [wordGroups, setWordGroups] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { toast } = useToast();

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        // Load audio settings from client service
        const settings = await VocabularyService.getAudioSettings();
        setAudioSettings(settings);
        
        // Load word groups from client service
        const groups = await VocabularyService.getAllWordGroups();
        setWordGroups(groups as any);
        
        // Load words for each group
        const wordsMap: Record<string, any[]> = {};
        for (const group of groups) {
          const words = await VocabularyService.getGroupWords(group.id);
          wordsMap[group.id] = words;
        }
        setGroupWords(wordsMap as any);
        
        // Initialize AudioManager with data (cast to match expected types)
        AudioManager.initializeData(groups as any, wordsMap as any, settings as any);
        
      } catch (error) {
        console.error('Failed to load data:', error);
        toast({
          title: "Loading Failed",
          description: "Failed to load vocabulary data.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [toast]);

  // Update audio settings using client service
  const handleSettingsChange = async (newSettings: typeof audioSettings) => {
    try {
      await VocabularyService.updateAudioSettings(newSettings);
      setAudioSettings(newSettings);
      toast({
        title: "Settings Updated",
        description: "Audio settings have been saved.",
      });
    } catch (error) {
      toast({
        title: "Settings Update Failed",
        description: "Failed to save audio settings.",
        variant: "destructive",
      });
    }
  };

  // Toggle learned status using client service
  const handleToggleLearned = async (groupId: string, isLearned: boolean) => {
    try {
      await VocabularyService.updateGroupLearnedStatus(groupId, isLearned);
      
      // Update local state
      setWordGroups(prevGroups => 
        prevGroups.map(group => 
          group.id === groupId 
            ? { ...group, isLearned: isLearned ? 1 : 0 } as any 
            : group
        )
      );
      
      toast({
        title: "Status Updated",
        description: `Group marked as ${isLearned ? 'learned' : 'not learned'}.`,
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "Learning status could not be saved.",
        variant: "destructive",
      });
    }
  };

  const learnedCount = wordGroups.filter(group => group.isLearned === 1).length;
  const totalWords = Object.values(groupWords).flat().length;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Languages className="text-white text-xl w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Chinese Vocabulary Learning
                </h1>
                <p className="text-gray-600">
                  Learn vocabulary with high-quality audio pronunciation
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">
                  {learnedCount} of {wordGroups.length} groups learned
                </span>
              </div>
              <div className="text-gray-500">
                {totalWords} total words
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Vocabulary Progress Widget */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Learning Progress</h3>
          <div className="flex items-center justify-center space-x-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {learnedCount * 10}
              </div>
              <div className="text-sm text-gray-600 mt-1">Words Learned</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700">
                {totalWords}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Words</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">
                {totalWords > 0 ? Math.round((learnedCount * 10 / totalWords) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-600 mt-1">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${totalWords > 0 ? (learnedCount * 10 / totalWords) * 100 : 0}%` }}
              ></div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              {learnedCount} of {wordGroups.length} groups completed
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="mb-8">
          <SettingsCard
            settings={audioSettings}
            onSettingsChange={handleSettingsChange}
          />
        </div>

        {/* Playback Mode Selector */}
        <div className="mb-8">
          <PlaybackModeSelector
            isReviewAvailable={learnedCount > 0}
          />
        </div>

        {/* Vocabulary Groups */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Vocabulary Groups
            </h2>
            <div className="text-sm text-gray-500">
              Choose playback mode above, then click "Start Learning" for random patterns: "English → Chinese → Chinese" or "Chinese → Chinese → English"
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-48 bg-white rounded-lg border animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {wordGroups.map((group) => (
                <VocabularyGroupCard
                  key={group.id}
                  group={group as any}
                  words={(groupWords[group.id] || []) as any}
                  audioSettings={audioSettings as any}
                  onToggleLearned={handleToggleLearned}
                />
              ))}
            </div>
          )}
        </div>

        {wordGroups.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No vocabulary groups available</p>
          </div>
        )}
      </div>
    </div>
  );
}