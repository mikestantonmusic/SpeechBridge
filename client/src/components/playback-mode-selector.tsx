import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Repeat, SkipForward, Shuffle, Info } from "lucide-react";
import { AudioManager, type PlaybackMode } from "@/lib/audio-manager";

interface PlaybackModeSelectorProps {
  isReviewAvailable: boolean;
}

export function PlaybackModeSelector({ isReviewAvailable }: PlaybackModeSelectorProps) {
  const [currentMode, setCurrentMode] = useState<PlaybackMode>("loop");

  useEffect(() => {
    const unsubscribe = AudioManager.subscribe((state) => {
      setCurrentMode(state.playbackMode);
    });
    return unsubscribe;
  }, []);

  const handleModeChange = (mode: PlaybackMode) => {
    AudioManager.setPlaybackMode(mode);
    setCurrentMode(mode);
  };

  const modes = [
    {
      id: "loop" as PlaybackMode,
      name: "Loop",
      icon: Repeat,
      description: "Plays selected group continuously until stopped",
      color: "bg-blue-200 text-blue-900 border-blue-400",
      activeColor: "bg-blue-600 text-white border-blue-600"
    },
    {
      id: "sequential" as PlaybackMode,
      name: "Sequential", 
      icon: SkipForward,
      description: "Auto-advances to next group after completion",
      color: "bg-green-200 text-green-900 border-green-400",
      activeColor: "bg-green-600 text-white border-green-600"
    },
    {
      id: "review" as PlaybackMode,
      name: "Review",
      icon: Shuffle,
      description: "Randomly plays learned groups for practice",
      color: "bg-purple-200 text-purple-900 border-purple-400",
      activeColor: "bg-purple-600 text-white border-purple-600",
      disabled: !isReviewAvailable
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Playback Mode</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = currentMode === mode.id;
          const isDisabled = mode.disabled;
          
          return (
            <div key={mode.id} className="relative">
              <Button
                variant="outline"
                size="lg"
                className={`w-full h-auto p-4 flex flex-col items-center space-y-2 border-2 transition-all min-h-[120px] ${
                  isDisabled 
                    ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-500 border-gray-300"
                    : isActive 
                      ? mode.activeColor
                      : `${mode.color} hover:${mode.activeColor.replace('600', '500')}`
                }`}
                onClick={() => !isDisabled && handleModeChange(mode.id)}
                disabled={isDisabled}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                <div className="text-center">
                  <div className="font-bold text-sm mb-1">{mode.name}</div>
                  <div className="text-xs leading-snug font-medium">
                    {mode.description}
                  </div>
                </div>
                {isActive && !isDisabled && (
                  <Badge variant="secondary" className="absolute -top-2 -right-2 bg-white text-gray-800 border shadow-sm">
                    Active
                  </Badge>
                )}
              </Button>
              
              {isDisabled && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 rounded-lg">
                  <Badge variant="outline" className="bg-white text-gray-600">
                    No Learned Groups
                  </Badge>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-sm text-gray-600">
          <strong>Current Mode: {modes.find(m => m.id === currentMode)?.name}</strong>
          <br />
          {modes.find(m => m.id === currentMode)?.description}
        </div>
      </div>
    </div>
  );
}