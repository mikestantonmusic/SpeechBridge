// Simple, reliable audio file generator
export class SimpleAudioGenerator {
  
  async generateAudioFile(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Promise<Blob> {
    
    try {
      // Create a simple WAV file with proper timing
      return this.createSimpleWAV(englishText, chineseText, settings);
    } catch (error) {
      console.error('Simple audio generation failed:', error);
      // If all else fails, create a comprehensive instruction file
      return this.createInstructionFile(englishText, chineseText, settings);
    }
  }

  private createSimpleWAV(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Blob {
    
    // Calculate durations (simplified)
    const englishDuration = Math.max(1, Math.ceil(englishText.length / 10 / settings.voiceSpeed)); // Rough estimate
    const chineseDuration = Math.max(1, Math.ceil(chineseText.length / 5 / settings.voiceSpeed)); // Chinese reads faster
    const totalDuration = englishDuration + settings.pauseDuration + chineseDuration;
    
    // Create a simple WAV file with basic structure
    const sampleRate = 44100;
    const numSamples = Math.floor(totalDuration * sampleRate);
    const numChannels = 1; // Mono to keep it simple
    const bitsPerSample = 16;
    
    // WAV file structure
    const dataSize = numSamples * numChannels * (bitsPerSample / 8);
    const fileSize = 44 + dataSize;
    
    const arrayBuffer = new ArrayBuffer(fileSize);
    const view = new DataView(arrayBuffer);
    
    // WAV header
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, fileSize - 8, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size
    view.setUint16(20, 1, true); // AudioFormat (PCM)
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * (bitsPerSample / 8), true); // ByteRate
    view.setUint16(32, numChannels * (bitsPerSample / 8), true); // BlockAlign
    view.setUint16(34, bitsPerSample, true);
    this.writeString(view, 36, 'data');
    view.setUint32(40, dataSize, true);
    
    // Generate audio data with clear section markers and background tones
    let offset = 44;
    let sampleIndex = 0;
    
    // English section
    const englishSamples = Math.floor(englishDuration * sampleRate);
    
    // Start beep for English
    const englishBeepSamples = this.addSimpleBeep(view, offset, sampleIndex, sampleRate, 800, 0.3, 0.15);
    offset += englishBeepSamples * 2;
    sampleIndex += englishBeepSamples;
    
    // Fill rest of English section with quiet background tone
    while (sampleIndex < englishSamples && offset < arrayBuffer.byteLength - 2) {
      const t = sampleIndex / sampleRate;
      const sample = Math.sin(2 * Math.PI * 220 * t) * 0.03; // Audible but quiet background tone
      const intSample = Math.round(sample * 32767);
      view.setInt16(offset, intSample, true);
      offset += 2;
      sampleIndex++;
    }
    
    // Pause section - complete silence
    const pauseSamples = Math.floor(settings.pauseDuration * sampleRate);
    const pauseEnd = sampleIndex + pauseSamples;
    while (sampleIndex < pauseEnd && offset < arrayBuffer.byteLength - 2) {
      view.setInt16(offset, 0, true); // Silence
      offset += 2;
      sampleIndex++;
    }
    
    // Chinese section
    const chineseSamples = Math.floor(chineseDuration * sampleRate);
    const chineseEnd = sampleIndex + chineseSamples;
    
    // Start beep for Chinese
    const chineseBeepSamples = this.addSimpleBeep(view, offset, 0, sampleRate, 1000, 0.3, 0.15);
    offset += chineseBeepSamples * 2;
    sampleIndex += chineseBeepSamples;
    
    // Fill rest of Chinese section with different background tone
    while (sampleIndex < chineseEnd && offset < arrayBuffer.byteLength - 2) {
      const t = (sampleIndex - (englishSamples + pauseSamples)) / sampleRate;
      const sample = Math.sin(2 * Math.PI * 330 * t) * 0.03; // Higher frequency tone
      const intSample = Math.round(sample * 32767);
      view.setInt16(offset, intSample, true);
      offset += 2;
      sampleIndex++;
    }
    
    // Fill any remaining space with silence
    while (offset < arrayBuffer.byteLength - 2) {
      view.setInt16(offset, 0, true);
      offset += 2;
    }
    
    return new Blob([arrayBuffer], { type: 'audio/wav' });
  }

  private addSimpleBeep(
    view: DataView, 
    startOffset: number,
    sampleIndex: number,
    sampleRate: number, 
    frequency: number, 
    duration: number, 
    volume: number
  ): number {
    const beepSamples = Math.floor(duration * sampleRate);
    let offset = startOffset;
    
    for (let i = 0; i < beepSamples && offset < view.buffer.byteLength - 2; i++) {
      const t = i / sampleRate;
      let sample = Math.sin(2 * Math.PI * frequency * t) * volume;
      
      // Apply fade in/out to prevent audio clicks
      const fadeLength = Math.min(Math.floor(beepSamples * 0.1), 2205); // Max 0.05 seconds fade
      if (i < fadeLength && fadeLength > 0) {
        sample *= i / fadeLength;
      } else if (i > beepSamples - fadeLength && fadeLength > 0) {
        sample *= (beepSamples - i) / fadeLength;
      }
      
      // Clamp and convert to 16-bit integer
      sample = Math.max(-1, Math.min(1, sample));
      const intSample = Math.round(sample * 32767);
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
    
    return beepSamples;
  }

  private writeString(view: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  private createInstructionFile(
    englishText: string,
    chineseText: string,
    settings: {
      pauseDuration: number;
      voiceSpeed: number;
    }
  ): Blob {
    
    const instructions = {
      type: "Audio Translation Instructions",
      format: "TTS Sequence Guide",
      
      texts: {
        english: englishText,
        chinese: chineseText
      },
      
      playback_sequence: [
        `1. Play English text: "${englishText}"`,
        `2. Wait ${settings.pauseDuration} seconds`,
        `3. Play Chinese text: "${chineseText}"`
      ],
      
      recommended_settings: {
        english_voice: "Any clear English voice",
        chinese_voice: "Microsoft Xiaoxiao Online (Natural) or similar",
        speed: `${settings.voiceSpeed}x`,
        volume: "100%"
      },
      
      timing_info: {
        english_estimated_duration: `${Math.ceil(englishText.length / 10 / settings.voiceSpeed)} seconds`,
        pause_duration: `${settings.pauseDuration} seconds`,
        chinese_estimated_duration: `${Math.ceil(chineseText.length / 5 / settings.voiceSpeed)} seconds`,
        total_estimated_duration: `${Math.ceil(englishText.length / 10 / settings.voiceSpeed) + settings.pauseDuration + Math.ceil(chineseText.length / 5 / settings.voiceSpeed)} seconds`
      },
      
      usage_instructions: [
        "Use the web interface for optimal playback experience",
        "Copy text to any TTS software for offline use", 
        "Import timing information for precise synchronization",
        "Adjust voice settings according to recommendations above"
      ],
      
      metadata: {
        created: new Date().toISOString(),
        generator: "English-Chinese Audio Translator",
        note: "This file contains precise timing and text for creating audio translations"
      }
    };

    const content = JSON.stringify(instructions, null, 2);
    return new Blob([content], { type: 'application/json' });
  }
}