// Mobile Audio Manager with background playback and offline support
import * as Speech from 'expo-speech';
import { VocabularyWord, AudioState, PlaybackMode, AudioSettings } from '../types';
import OfflineStorage from './OfflineStorage';
import BackgroundAudio from './BackgroundAudioService';

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
  private backgroundPlaybackEnabled = false;

  constructor() {
    this.checkBackgroundAudioAvailability();
  }

  private checkBackgroundAudioAvailability(): void {
    this.backgroundPlaybackEnabled = BackgroundAudio.isAvailable();
    console.log(`Background audio ${this.backgroundPlaybackEnabled ? 'available' : 'not available'}, using ${this.backgroundPlaybackEnabled ? 'BackgroundAudio' : 'Speech API'}`);
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

  // Enable/disable background playback
  setBackgroundPlayback(enabled: boolean) {
    this.backgroundPlaybackEnabled = enabled && BackgroundAudio.isAvailable();
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
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.stopPlayback();
      }
      
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

      // Set up listeners for background audio if enabled
      if (this.backgroundPlaybackEnabled) {
        BackgroundAudio.setAudioSettings(this.audioSettings);
        BackgroundAudio.setPlaybackMode(this.state.playbackMode);
        
        // Subscribe to background audio state changes
        BackgroundAudio.subscribe((bgState: AudioState) => {
          this.setState(bgState);
        });

        await BackgroundAudio.startGroupPlayback(groupId);
      } else {
        // Fallback to Speech API
        await this.playWithSpeechAPI(words);
      }

    } catch (error) {
      console.error('Failed to start group playbook:', error);
      this.setState({
        isPlaying: false,
        isBuffering: false
      });
      throw error;
    }
  }

  // Set playback mode on background audio service
  setPlaybackMode(mode: PlaybackMode) {
    this.setState({ playbackMode: mode });
    if (this.backgroundPlaybackEnabled) {
      BackgroundAudio.setPlaybackMode(mode);
    }
  }

  // Fallback playback using Speech API
  private async playWithSpeechAPI(words: VocabularyWord[]): Promise<void> {
    try {
      const pauseDuration = this.audioSettings?.pauseDuration || 2000;

      for (let i = 0; i < words.length && this.state.isPlaying; i++) {
        const word = words[i];

        this.setState({
          currentWordIndex: i,
          currentPhase: "english",
          isBuffering: false
        });

        // Speak English word
        await this.speakText(word.english, 'en');
        
        if (!this.state.isPlaying) break;

        // Pause
        this.setState({ currentPhase: "pause" });
        await this.sleep(pauseDuration);

        if (!this.state.isPlaying) break;

        // Speak Chinese word
        this.setState({ currentPhase: "chinese" });
        await this.speakText(word.chinese, 'zh');

        if (!this.state.isPlaying) break;

        // Brief pause between words
        await this.sleep(500);
      }

      // Handle playback completion based on mode
      if (this.state.isPlaying) {
        await this.handlePlaybackCompletion();
      }

    } catch (error) {
      console.error('Speech API playback failed:', error);
      this.setState({ isPlaying: false });
    }
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

  // Handle playback completion
  private async handlePlaybackCompletion(): Promise<void> {
    switch (this.state.playbackMode) {
      case "loop":
        // Restart the same group
        if (this.state.currentGroupId) {
          await this.startGroupPlayback(this.state.currentGroupId);
        }
        break;

      case "sequential":
        // Move to next group (implement based on your needs)
        this.setState({ isPlaying: false });
        break;

      case "review":
        // Play only learned groups (implement based on your needs)
        this.setState({ isPlaying: false });
        break;
    }
  }

  // Pause/Resume playback
  async togglePlayback(): Promise<void> {
    try {
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.togglePlayback();
      } else {
        if (this.state.isPlaying) {
          await this.stopAudio();
        } else if (this.state.currentGroupId) {
          await this.startGroupPlayback(this.state.currentGroupId);
        }
      }
    } catch (error) {
      console.error('Failed to toggle playback:', error);
    }
  }

  // Skip to next word
  async skipToNext(): Promise<void> {
    try {
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.skipToNext();
      } else {
        const nextIndex = Math.min(this.state.currentWordIndex + 1, this.currentWords.length - 1);
        this.setState({ currentWordIndex: nextIndex });
      }
    } catch (error) {
      console.error('Failed to skip to next:', error);
    }
  }

  // Skip to previous word
  async skipToPrevious(): Promise<void> {
    try {
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.skipToPrevious();
      } else {
        const prevIndex = Math.max(this.state.currentWordIndex - 1, 0);
        this.setState({ currentWordIndex: prevIndex });
      }
    } catch (error) {
      console.error('Failed to skip to previous:', error);
    }
  }

  // Set volume
  async setVolume(volume: number): Promise<void> {
    try {
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.setVolume(volume);
      }
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
      if (this.backgroundPlaybackEnabled) {
        await BackgroundAudio.destroy();
      }
    } catch (error) {
      console.error('Failed to destroy audio manager:', error);
    }
  }
}

export const AudioManager = new MobileAudioManager();
export default AudioManager;