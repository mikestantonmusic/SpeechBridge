import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Settings, Volume2, Clock, Zap } from "lucide-react";
import type { AudioSettings } from "@shared/schema";

interface SettingsCardProps {
  settings: AudioSettings;
  onSettingsChange: (settings: AudioSettings) => void;
}

export function SettingsCard({ settings, onSettingsChange }: SettingsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePauseDurationChange = (value: number[]) => {
    onSettingsChange({
      ...settings,
      pauseDuration: value[0]
    });
  };

  const handleVoiceSpeedChange = (value: number[]) => {
    onSettingsChange({
      ...settings,
      voiceSpeed: value[0]
    });
  };

  const handleAudioQualityChange = (quality: string) => {
    onSettingsChange({
      ...settings,
      audioQuality: quality as "standard" | "high" | "premium"
    });
  };

  const handleLanguageOrderChange = (order: string) => {
    onSettingsChange({
      ...settings,
      languageOrder: order as "english-first" | "chinese-first"
    });
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Settings className="w-5 h-5" />
            <span>Audio Settings</span>
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Hide" : "Show"}
          </Button>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Language Order */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 text-sm font-medium">
                <Volume2 className="w-4 h-4" />
                <span>Language Order</span>
              </Label>
              <Select value={settings.languageOrder} onValueChange={handleLanguageOrderChange}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Choose order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english-first">English → Chinese</SelectItem>
                  <SelectItem value="chinese-first">Chinese → English</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Order of pronunciation
              </p>
            </div>

            {/* Pause Duration */}
            <div className="space-y-3">
              <Label className="flex items-center space-x-2 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Pause Duration</span>
              </Label>
              <div className="px-3">
                <Slider
                  value={[settings.pauseDuration]}
                  onValueChange={handlePauseDurationChange}
                  max={3}
                  min={0.2}
                  step={0.1}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0.2s</span>
                <span className="font-medium">{settings.pauseDuration}s</span>
                <span>3.0s</span>
              </div>
            </div>

            {/* Voice Speed */}
            <div className="space-y-3">
              <Label className="flex items-center space-x-2 text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Voice Speed</span>
              </Label>
              <div className="px-3">
                <Slider
                  value={[settings.voiceSpeed]}
                  onValueChange={handleVoiceSpeedChange}
                  max={2}
                  min={0.5}
                  step={0.1}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0.5x</span>
                <span className="font-medium">{settings.voiceSpeed}x</span>
                <span>2.0x</span>
              </div>
            </div>

            {/* Audio Quality */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 text-sm font-medium">
                <Volume2 className="w-4 h-4" />
                <span>Audio Quality</span>
              </Label>
              <Select value={settings.audioQuality} onValueChange={handleAudioQualityChange}>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Choose quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="high">High Quality</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Browser voice quality
              </p>
            </div>
          </div>

          {/* Quick Settings */}
          <div className="mt-6 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSettingsChange({
                  ...settings,
                  pauseDuration: 0.5,
                  voiceSpeed: 1.2,
                  languageOrder: "english-first"
                })}
              >
                Fast Learning
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSettingsChange({
                  ...settings,
                  pauseDuration: 1.5,
                  voiceSpeed: 0.8,
                  languageOrder: "english-first"
                })}
              >
                Careful Practice
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSettingsChange({
                  ...settings,
                  pauseDuration: 1.0,
                  voiceSpeed: 1.0,
                  languageOrder: "english-first"
                })}
              >
                Reset Defaults
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}