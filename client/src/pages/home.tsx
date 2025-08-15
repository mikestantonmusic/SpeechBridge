import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { VocabularyGroupCard } from "@/components/vocabulary-group-card";
import { SettingsCard } from "@/components/settings-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Languages, BookOpen } from "lucide-react";
import type { AudioSettings, WordGroup, VocabularyWord } from "@shared/schema";

export default function Home() {
  const [audioSettings, setAudioSettings] = useState<AudioSettings>({
    id: "",
    pauseDuration: 1.0,
    voiceSpeed: 1.0,
    audioQuality: "high",
    languageOrder: "english-first",
  });

  const [groupWords, setGroupWords] = useState<Record<string, VocabularyWord[]>>({});
  
  const { toast } = useToast();

  // Fetch audio settings
  const { data: settingsData } = useQuery<AudioSettings>({
    queryKey: ["/api/audio-settings"],
  });

  // Fetch word groups
  const { data: wordGroups = [], isLoading: groupsLoading } = useQuery<WordGroup[]>({
    queryKey: ["/api/word-groups"],
  });

  useEffect(() => {
    if (settingsData) {
      setAudioSettings(settingsData);
    }
  }, [settingsData]);

  // Fetch words for each group
  useEffect(() => {
    const fetchWordsForGroups = async () => {
      if (wordGroups.length === 0) return;
      
      const wordsPromises = wordGroups.map(async (group) => {
        try {
          const response = await apiRequest("GET", `/api/word-groups/${group.id}/words`);
          const words = await response.json();
          return { groupId: group.id, words };
        } catch (error) {
          console.error(`Failed to fetch words for group ${group.id}:`, error);
          return { groupId: group.id, words: [] };
        }
      });

      const results = await Promise.all(wordsPromises);
      const wordsMap: Record<string, VocabularyWord[]> = {};
      results.forEach(({ groupId, words }) => {
        wordsMap[groupId] = words;
      });
      setGroupWords(wordsMap);
    };

    fetchWordsForGroups();
  }, [wordGroups]);

  // Update audio settings mutation
  const updateSettingsMutation = useMutation({
    mutationFn: async (settings: Partial<AudioSettings>) => {
      const response = await apiRequest("POST", "/api/audio-settings", settings);
      return response.json();
    },
    onSuccess: (data) => {
      setAudioSettings(data);
      queryClient.invalidateQueries({ queryKey: ["/api/audio-settings"] });
      toast({
        title: "Settings Updated",
        description: "Audio settings have been saved.",
      });
    },
    onError: (error) => {
      toast({
        title: "Settings Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Toggle learned status mutation
  const toggleLearnedMutation = useMutation({
    mutationFn: async ({ groupId, isLearned }: { groupId: string; isLearned: boolean }) => {
      const response = await apiRequest("PATCH", `/api/word-groups/${groupId}`, { isLearned });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/word-groups"] });
      toast({
        title: "Group Status Updated",
        description: "Learning status has been saved.",
      });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSettingsChange = (newSettings: AudioSettings) => {
    const { id, ...settingsToUpdate } = newSettings;
    updateSettingsMutation.mutate(settingsToUpdate);
  };

  const handleToggleLearned = (groupId: string, isLearned: boolean) => {
    toggleLearnedMutation.mutate({ groupId, isLearned });
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
        {/* Settings Panel */}
        <div className="mb-8">
          <SettingsCard
            settings={audioSettings}
            onSettingsChange={handleSettingsChange}
          />
        </div>

        {/* Vocabulary Groups */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Vocabulary Groups
            </h2>
            <div className="text-sm text-gray-500">
              Click "Start Learning" to hear: English → Chinese → Chinese (repeated for better learning)
            </div>
          </div>

          {groupsLoading ? (
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
                  group={group}
                  words={groupWords[group.id] || []}
                  audioSettings={audioSettings}
                  onToggleLearned={handleToggleLearned}
                />
              ))}
            </div>
          )}
        </div>

        {wordGroups.length === 0 && !groupsLoading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No vocabulary groups available</p>
          </div>
        )}
      </div>
    </div>
  );
}