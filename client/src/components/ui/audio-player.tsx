import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  audioUrl?: string;
  duration?: number;
  onPlay?: () => void;
  onPause?: () => void;
}

export function AudioPlayer({ audioUrl, duration = 0, onPlay, onPause }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(75);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onPause?.();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onPause]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !audioUrl) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      onPause?.();
    } else {
      audio.play();
      setIsPlaying(true);
      onPlay?.();
    }
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (value[0] / 100) * audio.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} preload="metadata" />
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900">Combined Audio</h4>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <i className="fas fa-clock"></i>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlayPause}
          disabled={!audioUrl}
          className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors p-0"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </Button>
        
        <div className="flex-1 relative">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <Slider
            value={[progressPercentage]}
            onValueChange={handleSeek}
            max={100}
            step={1}
            className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <Slider
            value={[volume]}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
      </div>

      {duration > 0 && (
        <div className="mt-4 text-xs text-gray-500 flex justify-between">
          <span>English: 0:00-{formatTime(duration * 0.4)}</span>
          <span>Pause: {formatTime(duration * 0.4)}-{formatTime(duration * 0.5)}</span>
          <span>Chinese: {formatTime(duration * 0.5)}-{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
}
