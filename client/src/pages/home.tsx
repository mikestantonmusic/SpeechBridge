import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { TranslationCard } from "@/components/translation-card";
import { SettingsCard } from "@/components/settings-card";
import { HistoryCard } from "@/components/history-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Languages } from "lucide-react";
import type { AudioSettings, Translation } from "@shared/schema";

export default function Home() {
  const [audioSettings, setAudioSettings] = useState<AudioSettings>({
    id: "",
    pauseDuration: 1.0,
    voiceSpeed: 1.0,
    audioQuality: "high",
    languageOrder: "english-first",
  });

  const { toast } = useToast();

  // Fetch audio settings
  const { data: settingsData } = useQuery<AudioSettings>({
    queryKey: ["/api/audio-settings"],
  });

  useEffect(() => {
    if (settingsData) {
      setAudioSettings(settingsData);
    }
  }, [settingsData]);

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

  const handleSettingsChange = (newSettings: AudioSettings) => {
    const { id, ...settingsToUpdate } = newSettings;
    updateSettingsMutation.mutate(settingsToUpdate);
  };

  const handleLoadTranslation = (translation: Translation) => {
    // This could be used to load a previous translation into the translation card
    toast({
      title: "Translation Loaded",
      description: "Previous translation has been loaded.",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Languages className="text-white text-xl w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Audio Translator</h1>
              <p className="text-sm text-gray-600">English to Chinese (Mandarin)</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Translation Card */}
        <TranslationCard audioSettings={audioSettings} />

        {/* Settings Card */}
        <div className="mt-8">
          <SettingsCard
            settings={audioSettings}
            onSettingsChange={handleSettingsChange}
          />
        </div>

        {/* History Card */}
        <div className="mt-8">
          <HistoryCard onLoadTranslation={handleLoadTranslation} />
        </div>
      </main>
    </div>
  );
}
