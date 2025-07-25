import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";
import { TTSService } from "@/lib/tts-service";

interface VoiceSelectorProps {
  onVoiceChange?: (voice: SpeechSynthesisVoice | null) => void;
}

export function VoiceSelector({ onVoiceChange }: VoiceSelectorProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = TTSService.getBrowserVoices();
      const chineseVoices = availableVoices.filter(voice => 
        voice.lang.includes('zh') || 
        voice.lang.includes('cmn') ||
        voice.name.toLowerCase().includes('chinese') ||
        voice.name.toLowerCase().includes('mandarin')
      );
      
      setVoices(chineseVoices);
      
      // Auto-select the best Chinese voice
      const bestVoice = TTSService.getBestChineseVoice();
      if (bestVoice) {
        setSelectedVoice(bestVoice.name);
        onVoiceChange?.(bestVoice);
      }
      
      setIsLoading(false);
    };

    // Voices might not be immediately available
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', loadVoices);
    } else {
      loadVoices();
    }

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, [onVoiceChange]);

  const handleVoiceChange = (voiceName: string) => {
    setSelectedVoice(voiceName);
    const voice = voices.find(v => v.name === voiceName) || null;
    onVoiceChange?.(voice);
  };

  const testVoice = async () => {
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      try {
        const utterance = new SpeechSynthesisUtterance("你好，这是中文语音测试");
        utterance.voice = voice;
        utterance.rate = 1.0;
        speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Voice test failed:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Loading Chinese voices...</Label>
        <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700 flex items-center">
        <Volume2 className="w-4 h-4 mr-2" />
        Chinese Voice ({voices.length} available)
      </Label>
      <div className="flex space-x-2">
        <Select value={selectedVoice} onValueChange={handleVoiceChange}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select Chinese voice..." />
          </SelectTrigger>
          <SelectContent>
            {voices.map((voice) => (
              <SelectItem key={voice.name} value={voice.name}>
                {voice.name} ({voice.lang})
              </SelectItem>
            ))}
            {voices.length === 0 && (
              <SelectItem value="none" disabled>
                No Chinese voices available
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        
        <Button
          variant="outline"
          size="sm"
          onClick={testVoice}
          disabled={!selectedVoice}
          className="px-3"
        >
          <Play className="w-4 h-4" />
        </Button>
      </div>
      
      {voices.length === 0 && (
        <p className="text-xs text-gray-500">
          No Chinese voices detected. Audio will use default system voice.
        </p>
      )}
      
      {voices.length > 0 && (
        <p className="text-xs text-gray-500">
          Found {voices.length} Chinese voice{voices.length > 1 ? 's' : ''}. Click play to test pronunciation.
        </p>
      )}
    </div>
  );
}