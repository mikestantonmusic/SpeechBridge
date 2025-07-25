import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { VoiceSelector } from "@/components/voice-selector";
import { Settings } from "lucide-react";

import type { AudioSettings } from "@shared/schema";

interface SettingsCardProps {
  settings: AudioSettings;
  onSettingsChange: (settings: AudioSettings) => void;
}

export function SettingsCard({ settings, onSettingsChange }: SettingsCardProps) {
  const handlePauseDurationChange = (value: string) => {
    onSettingsChange({
      ...settings,
      pauseDuration: parseFloat(value),
    });
  };

  const handleVoiceSpeedChange = (value: string) => {
    onSettingsChange({
      ...settings,
      voiceSpeed: parseFloat(value),
    });
  };

  const handleAudioQualityChange = (value: string) => {
    onSettingsChange({
      ...settings,
      audioQuality: value,
    });
  };

  const handleLanguageOrderChange = (value: string) => {
    onSettingsChange({
      ...settings,
      languageOrder: value,
    });
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Settings className="w-5 h-5 text-primary mr-2" />
          Audio Settings
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Pause Duration</Label>
            <Select value={settings.pauseDuration.toString()} onValueChange={handlePauseDurationChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.5">0.5 seconds</SelectItem>
                <SelectItem value="1">1 second</SelectItem>
                <SelectItem value="1.5">1.5 seconds</SelectItem>
                <SelectItem value="2">2 seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Voice Speed</Label>
            <Select value={settings.voiceSpeed.toString()} onValueChange={handleVoiceSpeedChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.75">Slow</SelectItem>
                <SelectItem value="1">Normal</SelectItem>
                <SelectItem value="1.25">Fast</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Audio Quality</Label>
            <Select value={settings.audioQuality} onValueChange={handleAudioQualityChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Language Order</Label>
            <Select value={settings.languageOrder} onValueChange={handleLanguageOrderChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english-first">English → Chinese</SelectItem>
                <SelectItem value="chinese-first">Chinese → English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <VoiceSelector />
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-900 mb-2">Chinese Audio Quality Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Try different Chinese voices for better pronunciation</li>
            <li>• Microsoft voices (Xiaoxiao, Kangkang) typically sound more natural</li>
            <li>• Slower speed (0.75x) often improves clarity for learning</li>
            <li>• Some operating systems have better Chinese TTS than others</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
