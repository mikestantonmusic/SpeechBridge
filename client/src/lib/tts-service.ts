// Enhanced TTS service using browser Speech Synthesis API with optimized voice selection
export class TTSService {
  static getBrowserVoices(): SpeechSynthesisVoice[] {
    if (!('speechSynthesis' in window)) return [];
    return speechSynthesis.getVoices();
  }

  static getBestChineseVoice(): SpeechSynthesisVoice | null {
    const voices = this.getBrowserVoices();
    
    // Priority order for Chinese voices (Microsoft Xiaoxiao is preferred)
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

  static getBestEnglishVoice(): SpeechSynthesisVoice | null {
    const voices = this.getBrowserVoices();
    
    // Priority order for English voices
    const englishVoicePriority = [
      'Microsoft David - English (United States)',
      'Microsoft Zira - English (United States)',
      'Google US English',
      'en-US'
    ];

    for (const voiceName of englishVoicePriority) {
      const voice = voices.find(v => 
        v.name.includes(voiceName) || 
        v.lang.includes(voiceName) ||
        v.name.toLowerCase().includes(voiceName.toLowerCase())
      );
      if (voice) return voice;
    }

    // Fallback to any English voice
    return voices.find(voice => 
      voice.lang.includes('en-US') || 
      voice.lang.includes('en') ||
      voice.name.toLowerCase().includes('english')
    ) || null;
  }

  // Stop any current speech
  static stopSpeech() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  static async speakWithBestVoice(text: string, language: string, speed: number = 1.0, volume: number = 100): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      // Stop any current speech
      this.stopSpeech();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = volume / 100;
      utterance.lang = language;
      
      if (language === 'zh-CN') {
        const bestVoice = this.getBestChineseVoice();
        if (bestVoice) {
          utterance.voice = bestVoice;
          console.log('Using Chinese voice:', bestVoice.name, bestVoice.lang);
        }
      } else {
        const bestVoice = this.getBestEnglishVoice();
        if (bestVoice) {
          utterance.voice = bestVoice;
          console.log('Using English voice:', bestVoice.name, bestVoice.lang);
        }
      }

      utterance.onend = () => {
        console.log('Speech finished:', text);
        resolve();
      };
      
      utterance.onerror = (event) => {
        console.error('Speech error:', event.error, 'for text:', text);
        reject(new Error(event.error));
      };

      utterance.onstart = () => {
        console.log('Speech started:', text);
      };

      try {
        speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Speech synthesis error:', error);
        reject(error);
      }
    });
  }

  // Initialize voices by calling getVoices and waiting for voiceschanged event
  static async initializeVoices(): Promise<void> {
    return new Promise((resolve) => {
      let voices = speechSynthesis.getVoices();
      
      if (voices.length > 0) {
        console.log('Voices already loaded:', voices.length);
        resolve();
        return;
      }
      
      const voicesChangedHandler = () => {
        voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
          console.log('Voices loaded:', voices.length);
          speechSynthesis.removeEventListener('voiceschanged', voicesChangedHandler);
          resolve();
        }
      };
      
      speechSynthesis.addEventListener('voiceschanged', voicesChangedHandler);
      
      // Timeout after 3 seconds
      setTimeout(() => {
        speechSynthesis.removeEventListener('voiceschanged', voicesChangedHandler);
        resolve();
      }, 3000);
    });
  }
}