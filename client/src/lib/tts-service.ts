// Enhanced TTS service with multiple free Chinese TTS providers
export class TTSService {
  private static async tryVoiceRSS(text: string, language: string): Promise<Blob | null> {
    try {
      // VoiceRSS free API (requires key but has a generous free tier)
      const response = await fetch('http://api.voicerss.org/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      // This would need an API key, skip for now
      return null;
    } catch (error) {
      console.log('VoiceRSS failed');
      return null;
    }
  }

  private static async tryTTSMaker(text: string, language: string): Promise<Blob | null> {
    try {
      // TTSMaker has a free tier with good Chinese voices
      const response = await fetch('https://api.ttsmaker.com/v1/tts', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          voice_id: language === 'zh-CN' ? 'zh-cn-XiaoxiaoNeural' : 'en-US-AriaNeural',
          speed: 1.0,
          volume: 100,
          pitch: 0,
          audio_format: 'mp3'
        })
      });
      
      if (response.ok) {
        return await response.blob();
      }
    } catch (error) {
      // Silently fail - CORS restrictions are common with free APIs
      return null;
    }
  }

  private static async tryResponseVoice(text: string, language: string): Promise<Blob | null> {
    try {
      // ResponseVoice has free Chinese TTS
      const voiceId = language === 'zh-CN' ? 'Chinese_Female' : 'US_English_Female';
      const response = await fetch(`https://responsevoice.org/responsivevoice/getvoice.php?t=${encodeURIComponent(text)}&tl=${language}&sv=&vn=&pitch=0.5&rate=0.5&vol=1&gender=female`, {
        mode: 'cors'
      });
      
      if (response.ok) {
        return await response.blob();
      }
    } catch (error) {
      // Silently fail - CORS restrictions are common with free APIs
      return null;
    }
  }

  static async generateSpeech(text: string, language: string, speed: number = 1.0, volume: number = 100): Promise<HTMLAudioElement | null> {
    // Skip external TTS services for now due to CORS restrictions
    // Browser speech synthesis with Microsoft voices works excellently
    return null; // Will use browser speech synthesis with optimized voice selection
  }

  static getBrowserVoices(): SpeechSynthesisVoice[] {
    if (!('speechSynthesis' in window)) return [];
    return speechSynthesis.getVoices();
  }

  static getBestChineseVoice(): SpeechSynthesisVoice | null {
    const voices = this.getBrowserVoices();
    
    // Priority order for Chinese voices
    const chineseVoicePriority = [
      'Microsoft Xiaoxiao - Chinese (Simplified, PRC)',
      'Microsoft Kangkang - Chinese (Simplified, PRC)', 
      'Google 中文（中国大陆）',
      'Chinese (China)',
      'zh-CN',
      'zh-TW',
      'cmn'
    ];

    for (const voiceName of chineseVoicePriority) {
      const voice = voices.find(v => 
        v.name.includes(voiceName) || 
        v.lang.includes(voiceName) ||
        v.name.toLowerCase().includes(voiceName.toLowerCase())
      );
      if (voice) return voice;
    }

    // Fallback to any Chinese voice
    return voices.find(voice => 
      voice.lang.includes('zh') || 
      voice.lang.includes('cmn') ||
      voice.name.toLowerCase().includes('chinese') ||
      voice.name.toLowerCase().includes('mandarin')
    ) || null;
  }

  static async speakWithBestVoice(text: string, language: string, speed: number = 1.0, volume: number = 100): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = volume / 100;
      
      if (language === 'zh-CN') {
        const bestVoice = this.getBestChineseVoice();
        if (bestVoice) {
          utterance.voice = bestVoice;
          console.log('Using optimized Chinese voice:', bestVoice.name, bestVoice.lang);
        }
      } else {
        const voices = this.getBrowserVoices();
        const englishVoice = voices.find(voice => 
          voice.lang.includes('en-US') || voice.lang.includes('en')
        );
        if (englishVoice) utterance.voice = englishVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(event.error);

      speechSynthesis.speak(utterance);
    });
  }
}