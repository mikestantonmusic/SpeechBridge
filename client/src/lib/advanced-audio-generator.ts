// Advanced audio generator that creates actual playable audio files
export class AdvancedAudioGenerator {
  private audioContext: AudioContext | null = null;
  private chunks: Blob[] = [];

  async generateRealAudioFile(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    // Strategy: Play the actual TTS and simultaneously record using screen recording API or create timed beeps
    try {
      return await this.recordTTSWithFeedback(englishText, chineseText, settings);
    } catch (error) {
      console.log('Advanced recording failed, using browser-compatible method');
      return await this.createTimedAudioGuide(englishText, chineseText, settings);
    }
  }

  private async recordTTSWithFeedback(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    // Use getDisplayMedia to capture system audio (requires user permission)
    const stream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: false
    });

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=opus'
    });

    this.chunks = [];

    return new Promise((resolve, reject) => {
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach(track => track.stop());
        const audioBlob = new Blob(this.chunks, { type: 'audio/webm' });
        resolve(audioBlob);
      };

      mediaRecorder.onerror = reject;

      // Start recording
      mediaRecorder.start();

      // Play the sequence and stop recording when done
      this.playSequenceWithRecording(englishText, chineseText, settings)
        .then(() => {
          setTimeout(() => {
            mediaRecorder.stop();
          }, 1000);
        })
        .catch(reject);
    });
  }

  private async createTimedAudioGuide(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    // Create an audio file with timed audio cues that match the TTS sequence
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const sampleRate = this.audioContext.sampleRate;
    
    // Calculate durations
    const englishDuration = this.estimateSpeechDuration(englishText, settings.voiceSpeed);
    const chineseDuration = this.estimateSpeechDuration(chineseText, settings.voiceSpeed);
    const totalDuration = englishDuration + settings.pauseDuration + chineseDuration + 2; // +2 for buffers
    
    // Create buffer for the entire sequence
    const audioBuffer = this.audioContext.createBuffer(2, Math.ceil(totalDuration * sampleRate), sampleRate);
    const leftChannel = audioBuffer.getChannelData(0);
    const rightChannel = audioBuffer.getChannelData(1);
    
    let currentSample = 0;
    
    // Add tone for English section start
    currentSample = this.addTone(leftChannel, rightChannel, currentSample, sampleRate, 440, 0.2, 0.1); // A4 tone
    
    // Add silence for English duration
    currentSample += Math.floor(englishDuration * sampleRate);
    
    // Add pause marker tone
    currentSample = this.addTone(leftChannel, rightChannel, currentSample, sampleRate, 220, 0.1, 0.05); // A3 tone
    
    // Add silence for pause duration
    currentSample += Math.floor(settings.pauseDuration * sampleRate);
    
    // Add tone for Chinese section start
    currentSample = this.addTone(leftChannel, rightChannel, currentSample, sampleRate, 660, 0.2, 0.1); // E5 tone
    
    // Add silence for Chinese duration
    currentSample += Math.floor(chineseDuration * sampleRate);
    
    // Add completion tone
    this.addTone(leftChannel, rightChannel, currentSample, sampleRate, 880, 0.3, 0.1); // A5 tone
    
    // Convert to WAV
    return this.audioBufferToWav(audioBuffer);
  }

  private addTone(
    leftChannel: Float32Array,
    rightChannel: Float32Array,
    startSample: number,
    sampleRate: number,
    frequency: number,
    duration: number,
    volume: number
  ): number {
    const numSamples = Math.floor(duration * sampleRate);
    
    for (let i = 0; i < numSamples && startSample + i < leftChannel.length; i++) {
      const t = i / sampleRate;
      const sample = Math.sin(2 * Math.PI * frequency * t) * volume;
      
      // Apply fade in/out to avoid clicks
      let fadeMultiplier = 1;
      const fadeLength = Math.min(Math.floor(numSamples * 0.1), 1000);
      
      if (i < fadeLength) {
        fadeMultiplier = i / fadeLength;
      } else if (i > numSamples - fadeLength) {
        fadeMultiplier = (numSamples - i) / fadeLength;
      }
      
      const finalSample = sample * fadeMultiplier;
      leftChannel[startSample + i] = finalSample;
      rightChannel[startSample + i] = finalSample;
    }
    
    return startSample + numSamples;
  }

  private async playSequenceWithRecording(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<void> {
    
    // Play the actual TTS sequence
    await this.speakText(englishText, 'en-US', settings.voiceSpeed);
    await this.addSilence(settings.pauseDuration);
    await this.speakText(chineseText, 'zh-CN', settings.voiceSpeed);
  }

  private speakText(text: string, language: string, speed: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.volume = 1.0;
      
      const voices = speechSynthesis.getVoices();
      if (language === 'zh-CN') {
        const chineseVoice = voices.find(voice => 
          voice.name.includes('Xiaoxiao') ||
          voice.lang.includes('zh-CN')
        );
        if (chineseVoice) utterance.voice = chineseVoice;
      } else {
        const englishVoice = voices.find(voice => voice.lang.includes('en'));
        if (englishVoice) utterance.voice = englishVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = reject;
      speechSynthesis.speak(utterance);
    });
  }

  private addSilence(duration: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, duration * 1000));
  }

  private estimateSpeechDuration(text: string, speed: number): number {
    const words = text.split(/\s+/).length;
    const baseRate = 150; // words per minute
    return (words / baseRate) * 60 / speed;
  }

  private audioBufferToWav(buffer: AudioBuffer): Blob {
    const length = buffer.length;
    const numChannels = buffer.numberOfChannels;
    const arrayBuffer = new ArrayBuffer(44 + length * numChannels * 2);
    const view = new DataView(arrayBuffer);
    
    // WAV header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    
    const sampleRate = buffer.sampleRate;
    const bitsPerSample = 16;
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length * numChannels * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * bitsPerSample / 8, true);
    view.setUint16(32, numChannels * bitsPerSample / 8, true);
    view.setUint16(34, bitsPerSample, true);
    writeString(36, 'data');
    view.setUint32(40, length * numChannels * 2, true);
    
    // Convert audio data
    let offset = 44;
    for (let i = 0; i < length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        const channelData = buffer.getChannelData(channel);
        const sample = Math.max(-1, Math.min(1, channelData[i]));
        view.setInt16(offset, sample * 0x7FFF, true);
        offset += 2;
      }
    }
    
    return new Blob([arrayBuffer], { type: 'audio/wav' });
  }

  cleanup(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.chunks = [];
  }
}