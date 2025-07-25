// Real speech audio generator using Web Speech API with audio capture
export class SpeechAudioGenerator {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private isRecording = false;

  async generateSpeechAudio(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    try {
      // Method 1: Try to get microphone permission and record while playing TTS
      // This captures the computer's audio output if possible
      return await this.captureSystemAudioWithTTS(englishText, chineseText, settings);
    } catch (error) {
      console.log('System audio capture failed, creating instruction file');
      
      // Method 2: Create a detailed instruction file that works with external TTS
      return this.createDetailedInstructionFile(englishText, chineseText, settings);
    }
  }

  private async captureSystemAudioWithTTS(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    // Try to capture display media (system audio)
    const stream = await navigator.mediaDevices.getDisplayMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        sampleRate: 44100
      },
      video: false
    });

    // Set up recording
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=opus'
    });

    this.audioChunks = [];
    this.isRecording = true;

    return new Promise<Blob>((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('MediaRecorder not initialized'));
        return;
      }

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop());
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.isRecording = false;
        resolve(audioBlob);
      };

      this.mediaRecorder.onerror = reject;

      // Start recording
      this.mediaRecorder.start();

      // Play the TTS sequence
      this.playFullSequence(englishText, chineseText, settings)
        .then(() => {
          // Give a small buffer then stop recording
          setTimeout(() => {
            if (this.mediaRecorder && this.isRecording) {
              this.mediaRecorder.stop();
            }
          }, 1000);
        })
        .catch(reject);
    });
  }

  private async playFullSequence(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<void> {
    
    // Play English text
    await this.speakText(englishText, 'en-US', settings.voiceSpeed);
    
    // Wait for pause duration
    await new Promise(resolve => setTimeout(resolve, settings.pauseDuration * 1000));
    
    // Play Chinese text with optimal voice
    await this.speakText(chineseText, 'zh-CN', settings.voiceSpeed);
  }

  private speakText(text: string, language: string, speed: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = 1.0;
      utterance.pitch = 1.0;
      
      // Get optimal voice
      const voices = speechSynthesis.getVoices();
      
      if (language === 'zh-CN') {
        // Find the best Chinese voice (prioritize Xiaoxiao)
        const chineseVoice = voices.find(voice => 
          voice.name.includes('Xiaoxiao') ||
          (voice.lang.includes('zh-CN') && voice.name.includes('Microsoft')) ||
          voice.lang.includes('zh-CN') ||
          voice.lang.includes('zh')
        );
        if (chineseVoice) {
          utterance.voice = chineseVoice;
          console.log('Using Chinese voice for recording:', chineseVoice.name);
        }
      } else {
        // Find a good English voice
        const englishVoice = voices.find(voice => 
          voice.lang.includes('en-US') || 
          voice.lang.includes('en')
        );
        if (englishVoice) {
          utterance.voice = englishVoice;
        }
      }

      utterance.onend = () => {
        // Small delay to ensure audio finishes
        setTimeout(resolve, 200);
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        reject(event.error);
      };

      speechSynthesis.speak(utterance);
    });
  }

  private createDetailedInstructionFile(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Blob {
    
    // Create a comprehensive file that can be used with any TTS software
    const instructionData = {
      type: "TTS-Audio-Instructions",
      version: "2.0",
      
      // Ready-to-use text for TTS software
      tts_script: [
        `${englishText}`,
        `[PAUSE ${settings.pauseDuration} seconds]`,
        `${chineseText}`
      ].join('\n'),
      
      // Detailed configuration
      configuration: {
        sequence: [
          {
            text: englishText,
            language: "en-US",
            voice_recommendation: "Any clear English voice",
            speed: settings.voiceSpeed,
            pause_after: 0
          },
          {
            text: "[PAUSE]",
            type: "silence",
            duration: settings.pauseDuration
          },
          {
            text: chineseText,
            language: "zh-CN", 
            voice_recommendation: "Microsoft Xiaoxiao Online (Natural) or similar Chinese neural voice",
            speed: settings.voiceSpeed,
            pause_after: 0
          }
        ]
      },

      // Instructions for different TTS software
      usage_instructions: {
        "Web Interface": "Return to the translation app and use the built-in player for optimal experience",
        
        "Windows Speech Platform": [
          "1. Open Speech Recognition in Windows Settings",
          "2. Use 'Speak Text' feature",
          "3. Paste the TTS script above",
          "4. Manually pause between English and Chinese sections"
        ],
        
        "NVDA Screen Reader": [
          "1. Copy the TTS script text",
          "2. Paste into NVDA's Speech Viewer",
          "3. Configure voice switching for different languages"
        ],
        
        "General TTS Software": [
          "1. Import this file or copy the TTS script",
          "2. Set English voice for first part",
          "3. Add manual pause",
          "4. Set Chinese voice (preferably Xiaoxiao) for second part",
          "5. Export as audio file"
        ]
      },

      // Timing information
      timing: {
        english_estimated_duration: this.estimateDuration(englishText, settings.voiceSpeed),
        pause_duration: settings.pauseDuration,
        chinese_estimated_duration: this.estimateDuration(chineseText, settings.voiceSpeed),
        total_estimated_duration: this.estimateDuration(englishText, settings.voiceSpeed) + 
                                 settings.pauseDuration + 
                                 this.estimateDuration(chineseText, settings.voiceSpeed)
      },

      metadata: {
        created: new Date().toISOString(),
        english_text: englishText,
        chinese_text: chineseText,
        generator: "English-Chinese Audio Translator"
      }
    };

    const content = JSON.stringify(instructionData, null, 2);
    return new Blob([content], { type: 'application/json' });
  }

  private estimateDuration(text: string, speed: number): number {
    // Estimate speech duration based on text length and speed
    const wordsPerMinute = 150; // Average speaking rate
    const words = text.split(/\s+/).length;
    const baseSeconds = (words / wordsPerMinute) * 60;
    return baseSeconds / speed;
  }

  cleanup(): void {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
    }
    this.audioChunks = [];
    this.isRecording = false;
  }
}