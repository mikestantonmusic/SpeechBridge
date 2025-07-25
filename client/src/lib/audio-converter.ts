// Audio format converter for better compatibility
export class AudioConverter {
  
  async convertToWAV(webmBlob: Blob): Promise<Blob> {
    try {
      // Create audio context for processing
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Convert blob to array buffer
      const arrayBuffer = await webmBlob.arrayBuffer();
      
      // Decode the audio data
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      // Convert to WAV format
      const wavBlob = this.audioBufferToWav(audioBuffer);
      
      // Clean up
      audioContext.close();
      
      return wavBlob;
    } catch (error) {
      console.error('WAV conversion failed:', error);
      throw new Error('Failed to convert to WAV format');
    }
  }

  private audioBufferToWav(audioBuffer: AudioBuffer): Blob {
    const numberOfChannels = audioBuffer.numberOfChannels;
    const sampleRate = audioBuffer.sampleRate;
    const length = audioBuffer.length * numberOfChannels * 2;
    
    // Create array buffer for WAV file
    const arrayBuffer = new ArrayBuffer(44 + length);
    const view = new DataView(arrayBuffer);
    
    // WAV file header
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + length, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size
    view.setUint16(20, 1, true); // AudioFormat (PCM)
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numberOfChannels * 2, true); // ByteRate
    view.setUint16(32, numberOfChannels * 2, true); // BlockAlign
    view.setUint16(34, 16, true); // BitsPerSample
    this.writeString(view, 36, 'data');
    view.setUint32(40, length, true);

    // Convert audio data
    let offset = 44;
    for (let i = 0; i < audioBuffer.length; i++) {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(channel)[i]));
        view.setInt16(offset, sample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' });
  }

  async convertToMP3(webmBlob: Blob): Promise<Blob> {
    // Note: MP3 encoding requires additional libraries like lamejs
    // For now, we'll return the original blob and suggest external conversion
    console.log('MP3 conversion requires additional encoding libraries');
    throw new Error('MP3 conversion not yet implemented - use online converter or WAV format');
  }

  private writeString(view: DataView, offset: number, string: string): void {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  // Check if browser supports audio conversion
  static isConversionSupported(): boolean {
    try {
      return !!(window.AudioContext || (window as any).webkitAudioContext);
    } catch {
      return false;
    }
  }
}