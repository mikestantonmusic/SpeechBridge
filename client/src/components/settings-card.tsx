import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings } from "lucide-react";

interface AudioSettings {
  pauseDuration: number;
  voiceSpeed: number;
  audioQuality: string;
}

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

  return (
    <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Settings className="w-5 h-5 text-primary mr-2" />
          Audio Settings
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </CardContent>
    </Card>
  );
}
