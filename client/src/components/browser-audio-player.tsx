import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Download, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BrowserAudioPlayerProps {
  englishText: string;
  chineseText: string;
  settings: {
    pauseDuration: number;
    voiceSpeed: number;
    audioQuality: string;
  };
  duration?: number;
}

export function BrowserAudioPlayer({ englishText, chineseText, settings, duration = 0 }: BrowserAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<"idle" | "english" | "pause" | "chinese">("idle");
  const [volume, setVolume] = useState(75);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef(0);
  const { toast } = useToast();

  const englishDuration = englishText.length * 0.08;
  const pauseDuration = settings.pauseDuration;
  const chineseDuration = chineseText.length * 0.12;
  const totalDuration = englishDuration + pauseDuration + chineseDuration;

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const speakText = (text: string, language: string, speed: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = volume / 100;
      
      // Set voice based on language
      const voices = speechSynthesis.getVoices();
      if (language === 'zh-CN') {
        const chineseVoice = voices.find(voice => 
          voice.lang.includes('zh') || voice.lang.includes('cmn')
        );
        if (chineseVoice) utterance.voice = chineseVoice;
      } else {
        const englishVoice = voices.find(voice => 
          voice.lang.includes('en-US') || voice.lang.includes('en')
        );
        if (englishVoice) utterance.voice = englishVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(event.error);

      speechSynthesis.speak(utterance);
    });
  };

  const playSequence = async () => {
    try {
      setIsPlaying(true);
      startTimeRef.current = Date.now();
      
      // Start timer
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        setCurrentTime(elapsed);
        
        if (elapsed <= englishDuration) {
          setCurrentPhase("english");
        } else if (elapsed <= englishDuration + pauseDuration) {
          setCurrentPhase("pause");
        } else if (elapsed <= totalDuration) {
          setCurrentPhase("chinese");
        } else {
          setCurrentPhase("idle");
          setIsPlaying(false);
          setCurrentTime(0);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 100);

      // Play English
      setCurrentPhase("english");
      await speakText(englishText, 'en-US', settings.voiceSpeed);
      
      // Pause
      setCurrentPhase("pause");
      await new Promise(resolve => setTimeout(resolve, pauseDuration * 1000));
      
      // Play Chinese
      setCurrentPhase("chinese");
      await speakText(chineseText, 'zh-CN', settings.voiceSpeed);
      
      // Finished
      setCurrentPhase("idle");
      setIsPlaying(false);
      setCurrentTime(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setIsPlaying(false);
      setCurrentPhase("idle");
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      toast({
        title: "Audio Playback Failed",
        description: "Unable to play audio. Please check your browser's speech synthesis support.",
        variant: "destructive",
      });
    }
  };

  const stopPlayback = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentPhase("idle");
    setCurrentTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      playSequence();
    }
  };

  const handleDownload = async () => {
    try {
      // Create a simple text file with the translation
      const content = `English: ${englishText}\n中文: ${chineseText}\n\nSettings:\nPause Duration: ${settings.pauseDuration}s\nVoice Speed: ${settings.voiceSpeed}x\nQuality: ${settings.audioQuality}`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `translation_${englishText.slice(0, 20).replace(/[^a-zA-Z0-9]/g, "_")}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Download Started",
        description: "Translation text file downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download translation file",
        variant: "destructive",
      });
    }
  };

  const progressPercentage = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;

  const getPhaseDescription = () => {
    switch (currentPhase) {
      case "english": return "Speaking English...";
      case "pause": return "Pause...";
      case "chinese": return "Speaking Chinese...";
      default: return "Ready to play";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white">Audio Playback</h4>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Volume2 className="w-4 h-4" />
          <span>{Math.ceil(totalDuration)}s</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {getPhaseDescription()}
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
          <div 
            className="h-2 bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlayPause}
          className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors p-0"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </Button>
        
        <div className="flex-1" />
        
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          className="flex items-center space-x-1"
        >
          <Download className="w-4 h-4" />
          <span>Save</span>
        </Button>
      </div>

      {totalDuration > 0 && (
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
          <span>English: 0:00-{Math.ceil(englishDuration)}s</span>
          <span>Pause: {Math.ceil(englishDuration)}s-{Math.ceil(englishDuration + pauseDuration)}s</span>
          <span>Chinese: {Math.ceil(englishDuration + pauseDuration)}s-{Math.ceil(totalDuration)}s</span>
        </div>
      )}
    </div>
  );
}