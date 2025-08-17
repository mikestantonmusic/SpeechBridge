// Mobile Audio Manager with offline support (Expo Go compatible)
import * as Speech from 'expo-speech';
import { VocabularyWord, AudioState, PlaybackMode, AudioSettings } from '../types';
import OfflineStorage from './OfflineStorage';

class MobileAudioManager {
  private state: AudioState = {
    isPlaying: false,
    currentGroupId: null,
    currentWordIndex: 0,
    currentPhase: "idle",
    playbackMode: "loop",
    volume: 1.0,
    isBuffering: false
  };

  private listeners: ((state: AudioState) => void)[] = [];
  private currentWords: VocabularyWord[] = [];
  private audioSettings: AudioSettings | null = null;

  constructor() {
    // No background audio service in Expo Go
  }

  // Subscribe to audio state changes
  subscribe(listener: (state: AudioState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Update state and notify listeners
  private setState(updates: Partial<AudioState>) {
    this.state = { ...this.state, ...updates };
    this.listeners.forEach(listener => listener(this.state));
  }

  // Initialize with audio settings
  setAudioSettings(settings: AudioSettings) {
    this.audioSettings = settings;
  }

  // Set playback mode
  setPlaybackMode(mode: PlaybackMode) {
    this.setState({ playbackMode: mode });
  }

  // Get current state
  getState(): AudioState {
    return { ...this.state };
  }

  // Stop all audio playback
  async stopAudio(): Promise<void> {
    try {
      Speech.stop();
      this.setState({
        isPlaying: false,
        currentGroupId: null,
        currentWordIndex: 0,
        currentPhase: "idle",
        isBuffering: false
      });
    } catch (error) {
      console.error('Failed to stop audio:', error);
    }
  }

  // Start playing a specific group
  async startGroupPlayback(groupId: string): Promise<void> {
    try {
      await this.stopAudio();

      // Get words from offline storage first
      let words = await OfflineStorage.getGroupWords(groupId);
      
      // If not available offline, try API (this ensures we always have data)
      if (words.length === 0) {
        console.log(`Group ${groupId} not found offline, trying API...`);
        try {
          const VocabularyAPI = require('./VocabularyAPI').default;
          words = await VocabularyAPI.getGroupWords(groupId);
        } catch (apiError) {
          console.error('API fetch failed:', apiError);
        }
      }

      if (words.length === 0) {
        throw new Error('No words found for this group. Please download it first or check your connection.');
      }

      // Sort words by order
      words.sort((a, b) => a.order - b.order);

      this.currentWords = words;
      this.setState({
        isPlaying: true,
        currentGroupId: groupId,
        currentWordIndex: 0,
        currentPhase: "english",
        isBuffering: true
      });

      console.log(`Starting playback for group ${groupId} with ${words.length} words`);

      // Only Speech API playback in Expo Go
      await this.playWithSpeechAPI(words);

    } catch (error) {
      console.error('Failed to start group playback:', error);
      this.setState({
        isPlaying: false,
        isBuffering: false
      });
      throw error;
    }
  }

// Fallback playback using Speech API with web app pattern matching
private async playWithSpeechAPI(words: VocabularyWord[]): Promise<void> {
  try {
    // Continuous loop until user stops (matching web app behavior)
    while (this.state.isPlaying && this.state.playbackMode === 'loop') {
      console.log('Starting new loop cycle with', words.length, 'words');
      
      for (let i = 0; i < words.length && this.state.isPlaying; i++) {
        const word = words[i];
        
        this.setState({
          currentWordIndex: i,
          isBuffering: false
        });

        // Play word with random pattern (matching web app)
        await this.playWordWithRandomPattern(word);

        if (!this.state.isPlaying) break;

        // Pause between words (2 seconds like web app)
        await this.sleep(3000);
      }
    }

    // Handle non-loop modes
    if (this.state.playbackMode !== 'loop') {
      for (let i = 0; i < words.length && this.state.isPlaying; i++) {
        const word = words[i];
        
        this.setState({
          currentWordIndex: i,
          isBuffering: false
        });

        await this.playWordWithRandomPattern(word);

        if (!this.state.isPlaying) break;
        await this.sleep(3000);
      }

      // Handle completion for non-loop modes
      if (this.state.isPlaying) {
        await this.handlePlaybackCompletion();
      }
    }

  } catch (error) {
    console.error('Speech API playback failed:', error);
    this.setState({ isPlaying: false });
  }
}

  // Play a single word with random pattern (matching web app behavior)
  private async playWordWithRandomPattern(word: VocabularyWord): Promise<void> {
    if (!this.audioSettings) return;

    // Randomly choose pattern for each word: 50% chance for each (matching web app)
    const useEnglishFirst = Math.random() < 0.5;
    console.log('Playing word:', word.english, '/', word.chinese, `(${word.pinyin})`, 
              '- Pattern:', useEnglishFirst ? 'English → Chinese → Chinese' : 'Chinese → Chinese → English');

    if (useEnglishFirst) {
      // Pattern: English → Chinese → Chinese (matching web app)
      await this.speakWithPhase(word.english, 'en', "english");
      if (!this.state.isPlaying) return;
      
      await this.pauseWithPhase();
      if (!this.state.isPlaying) return;
      
      await this.speakWithPhase(word.chinese, 'zh', "chinese");
      if (!this.state.isPlaying) return;
      
      await this.pauseWithPhase();
      if (!this.state.isPlaying) return;
      
      await this.speakWithPhase(word.chinese, 'zh', "chinese2");
    } else {
      // Pattern: Chinese → Chinese → English (matching web app)
      await this.speakWithPhase(word.chinese, 'zh', "chinese");
      if (!this.state.isPlaying) return;
      
      await this.pauseWithPhase();
      if (!this.state.isPlaying) return;
      
      await this.speakWithPhase(word.chinese, 'zh', "chinese2");
      if (!this.state.isPlaying) return;
      
      await this.pauseWithPhase();
      if (!this.state.isPlaying) return;
      
      await this.speakWithPhase(word.english, 'en', "english");
    }
  }

  // Speak text with phase update (matching web app)
  private async speakWithPhase(text: string, language: string, phase: AudioState['currentPhase']): Promise<void> {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: phase });
    
    try {
      await this.speakText(text, language);
    } catch (error) {
      console.error(`Speech error for ${phase}:`, error);
    }
  }

  // Pause with phase update (matching web app)
  private async pauseWithPhase(): Promise<void> {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: "pause" });
    await this.sleep(this.audioSettings.pauseDuration * 1500);
  }

  // Speak text using Speech API
  private async speakText(text: string, language: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const options = {
        language,
        pitch: 1.0,
        rate: this.audioSettings?.voiceSpeed || 1.0,
        onDone: resolve,
        onError: reject,
      };

      Speech.speak(text, options);
    });
  }

  // Handle playback completion (matching web app behavior)
  private async handlePlaybackCompletion(): Promise<void> {
    switch (this.state.playbackMode) {
      case "loop":
        // Loop mode is handled in the main playback loop
        // This should not be reached for loop mode
        console.log('Loop mode completion - should not reach here');
        break;

      case "sequential":
        // Move to next group (could be implemented with group list)
        console.log('Sequential playback completed');
        this.setState({ isPlaying: false });
        break;

      case "review":
        // Play only learned groups (could be implemented with learned groups)
        console.log('Review playback completed');
        this.setState({ isPlaying: false });
        break;
    }
  }

  // Pause/Resume playback
  async togglePlayback(): Promise<void> {
    try {
      if (this.state.isPlaying) {
        await this.stopAudio();
      } else if (this.state.currentGroupId) {
        await this.startGroupPlayback(this.state.currentGroupId);
      }
    } catch (error) {
      console.error('Failed to toggle playback:', error);
    }
  }

  // Skip to next word
  async skipToNext(): Promise<void> {
    try {
      const nextIndex = Math.min(this.state.currentWordIndex + 1, this.currentWords.length - 1);
      this.setState({ currentWordIndex: nextIndex });
    } catch (error) {
      console.error('Failed to skip to next:', error);
    }
  }

  // Skip to previous word
  async skipToPrevious(): Promise<void> {
    try {
      const prevIndex = Math.max(this.state.currentWordIndex - 1, 0);
      this.setState({ currentWordIndex: prevIndex });
    } catch (error) {
      console.error('Failed to skip to previous:', error);
    }
  }

  // Set volume (no-op for Speech API, but update state)
  async setVolume(volume: number): Promise<void> {
    try {
      this.setState({ volume });
    } catch (error) {
      console.error('Failed to set volume:', error);
    }
  }

  // Utility function for delays
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Clean up resources
  async destroy(): Promise<void> {
    try {
      await this.stopAudio();
    } catch (error) {
      console.error('Failed to destroy audio manager:', error);
    }
  }
}

export const AudioManager = new MobileAudioManager();
export default AudioManager;