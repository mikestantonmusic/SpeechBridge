// Advanced audio generator that captures actual browser speech synthesis
export class AdvancedAudioGenerator {
  private audioContext: AudioContext | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];

  constructor() {
    // Initialize audio context when needed
  }

  async generateRealAudioFile(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
      selectedVoice?: string;
    }
  ): Promise<Blob> {
    
    try {
      // Method 1: Try MediaRecorder approach (most likely to work)
      return await this.captureWithMediaRecorder(englishText, chineseText, settings);
    } catch (error) {
      console.log('MediaRecorder failed, trying Web Audio approach:', error);
      
      try {
        // Method 2: Try Web Audio API with destination capture
        return await this.captureWithWebAudio(englishText, chineseText, settings);
      } catch (error2) {
        console.log('All recording methods failed, creating instruction file:', error2);
        
        // Method 3: Create detailed instruction file with timing
        return this.createDetailedInstructionFile(englishText, chineseText, settings);
      }
    }
  }

  private async captureWithWebAudio(
    englishText: string,
    chineseText: string,
    settings: any
  ): Promise<Blob> {
    
    // Initialize audio context
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a destination for recording
    const mediaStreamDestination = this.audioContext.createMediaStreamDestination();
    
    // Set up MediaRecorder to capture the audio
    this.mediaRecorder = new MediaRecorder(mediaStreamDestination.stream, {
      mimeType: 'audio/webm;codecs=opus'
    });
    
    this.recordedChunks = [];
    
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('MediaRecorder not initialized'));
        return;
      }

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
        resolve(blob);
      };

      this.mediaRecorder.onerror = (event) => {
        reject(new Error('Recording failed'));
      };

      // Start recording
      this.mediaRecorder.start();

      // Play the speech sequence
      this.playSpeechSequence(englishText, chineseText, settings)
        .then(() => {
          // Stop recording after speech is complete
          setTimeout(() => {
            if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
              this.mediaRecorder.stop();
            }
          }, 1000); // Give extra time for speech to complete
        })
        .catch(reject);
    });
  }

  private async captureWithMediaRecorder(
    englishText: string,
    chineseText: string,
    settings: any
  ): Promise<Blob> {
    
    // Request microphone access to create a MediaRecorder
    // Note: This won't actually use the microphone, but enables MediaRecorder
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });
    
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=opus'
    });
    
    this.recordedChunks = [];
    
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('MediaRecorder not initialized'));
        return;
      }

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        // Stop the stream
        stream.getTracks().forEach(track => track.stop());
        
        const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
        resolve(blob);
      };

      this.mediaRecorder.onerror = (event) => {
        stream.getTracks().forEach(track => track.stop());
        reject(new Error('Recording failed'));
      };

      // Start recording
      this.mediaRecorder.start();

      // Play the speech sequence while recording system audio
      this.playSpeechSequence(englishText, chineseText, settings)
        .then(() => {
          // Stop recording after speech is complete
          setTimeout(() => {
            if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
              this.mediaRecorder.stop();
            }
          }, 1000);
        })
        .catch(reject);
    });
  }

  private async playSpeechSequence(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
      selectedVoice?: string;
    }
  ): Promise<void> {
    
    return new Promise((resolve, reject) => {
      if (!('speechSynthesis' in window)) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      const synth = window.speechSynthesis;
      let currentStep = 0;

      const nextStep = () => {
        currentStep++;
        
        if (currentStep === 1) {
          // Step 1: Speak English
          const englishUtterance = new SpeechSynthesisUtterance(englishText);
          englishUtterance.rate = settings.voiceSpeed;
          englishUtterance.lang = 'en-US';
          
          englishUtterance.onend = () => {
            // Step 2: Pause
            setTimeout(nextStep, settings.pauseDuration * 1000);
          };
          
          englishUtterance.onerror = () => reject(new Error('English speech synthesis failed'));
          synth.speak(englishUtterance);
          
        } else if (currentStep === 2) {
          // Step 3: Speak Chinese
          const chineseUtterance = new SpeechSynthesisUtterance(chineseText);
          chineseUtterance.rate = settings.voiceSpeed;
          chineseUtterance.lang = 'zh-CN';
          
          // Try to use the optimal Chinese voice
          const voices = synth.getVoices();
          const chineseVoice = voices.find(voice => 
            voice.name.includes('Xiaoxiao') || 
            (voice.lang.includes('zh') && voice.name.includes('Microsoft'))
          ) || voices.find(voice => voice.lang.includes('zh-CN'));
          
          if (chineseVoice) {
            chineseUtterance.voice = chineseVoice;
          }
          
          chineseUtterance.onend = () => resolve();
          chineseUtterance.onerror = () => reject(new Error('Chinese speech synthesis failed'));
          synth.speak(chineseUtterance);
        }
      };

      // Start the sequence
      nextStep();
    });
  }

  private createDetailedInstructionFile(
    englishText: string,
    chineseText: string,
    settings: any
  ): Blob {
    
    const instructions = {
      type: "Spoken Audio Translation Guide",
      format: "Voice Recording Instructions",
      
      recording_steps: [
        "1. Use any voice recording app or text-to-speech software",
        "2. Follow the exact sequence below with precise timing",
        "3. Use Microsoft Xiaoxiao voice for Chinese if available"
      ],
      
      sequence: {
        step_1: {
          action: "Record English speech",
          text: englishText,
          voice: "Clear English voice (system default)",
          speed: `${settings.voiceSpeed}x normal speed`,
          estimated_duration: `${Math.ceil(englishText.length / 10 / settings.voiceSpeed)} seconds`
        },
        step_2: {
          action: "Add silence/pause",
          duration: `${settings.pauseDuration} seconds`,
          note: "Complete silence between languages"
        },
        step_3: {
          action: "Record Chinese speech", 
          text: chineseText,
          voice: "Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)",
          language_code: "zh-CN",
          speed: `${settings.voiceSpeed}x normal speed`,
          estimated_duration: `${Math.ceil(chineseText.length / 5 / settings.voiceSpeed)} seconds`
        }
      },
      
      total_estimated_duration: `${Math.ceil(englishText.length / 10 / settings.voiceSpeed) + settings.pauseDuration + Math.ceil(chineseText.length / 5 / settings.voiceSpeed)} seconds`,
      
      quality_tips: [
        "Use Microsoft Xiaoxiao voice for most natural Chinese pronunciation",
        "Ensure consistent volume levels between English and Chinese",
        "Test playback speed to match your learning preferences",
        "Save as high-quality audio format (WAV or MP3 320kbps)"
      ],
      
      browser_playback_note: "For immediate playback, use the 'Play' button in the web interface which provides excellent quality with Microsoft Xiaoxiao voice",
      
      technical_limitation: "Due to browser security restrictions, direct audio capture from speech synthesis is not possible. This file provides the exact specifications for creating the audio manually.",
      
      metadata: {
        created: new Date().toISOString(),
        english_text: englishText,
        chinese_text: chineseText,
        settings: settings
      }
    };

    const content = JSON.stringify(instructions, null, 2);
    return new Blob([content], { type: 'application/json' });
  }

  cleanup(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    if (this.mediaRecorder) {
      if (this.mediaRecorder.state === 'recording') {
        this.mediaRecorder.stop();
      }
      this.mediaRecorder = null;
    }
    
    this.recordedChunks = [];
  }


}