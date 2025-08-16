// Background Audio Service using React Native Track Player
import TrackPlayer, {
  Track,
  State,
  Event,
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
} from 'react-native-track-player';
import { VocabularyWord, AudioState, PlaybackMode, AudioSettings } from '../types';
import OfflineStorage from './OfflineStorage';

class BackgroundAudioService {
  private isInitialized = false;
  private currentWords: VocabularyWord[] = [];
  private currentGroupId: string | null = null;
  private audioSettings: AudioSettings | null = null;
  private playbackMode: PlaybackMode = 'loop';
  private listeners: ((state: AudioState) => void)[] = [];
  private currentState: AudioState = {
    isPlaying: false,
    currentGroupId: null,
    currentWordIndex: 0,
    currentPhase: "idle",
    playbackMode: "loop",
    volume: 1.0,
    isBuffering: false
  };

  constructor() {
    this.initializePlayer();
  }

  private async initializePlayer(): Promise<void> {
    try {
      await TrackPlayer.setupPlayer({
        maxCacheSize: 1024 * 50, // 50MB cache
      });

      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 1,
      });

      // Set up event listeners
      this.setupEventListeners();
      
      this.isInitialized = true;
      console.log('Background Audio Service initialized');
    } catch (error) {
      console.error('Failed to initialize Background Audio Service:', error);
      this.isInitialized = false;
    }
  }

  private setupEventListeners(): void {
    TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {
      const isPlaying = data.state === State.Playing;
      const isBuffering = data.state === State.Buffering || data.state === State.Loading;
      
      this.updateState({
        isPlaying,
        isBuffering,
      });
    });

    TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
      if (data.nextTrack !== undefined) {
        const trackIndex = data.nextTrack;
        const wordIndex = Math.floor(trackIndex / 3); // Each word has 3 tracks: English, pause, Chinese
        const phase = this.getPhaseFromTrackIndex(trackIndex);
        
        this.updateState({
          currentWordIndex: wordIndex,
          currentPhase: phase,
        });
      }
    });

    TrackPlayer.addEventListener(Event.PlaybackQueueEnded, async () => {
      await this.handlePlaybackCompletion();
    });
  }

  private getPhaseFromTrackIndex(trackIndex: number): AudioState['currentPhase'] {
    const phaseIndex = trackIndex % 3;
    switch (phaseIndex) {
      case 0: return 'english';
      case 1: return 'pause';
      case 2: return 'chinese';
      default: return 'idle';
    }
  }

  private updateState(updates: Partial<AudioState>): void {
    this.currentState = { ...this.currentState, ...updates };
    this.listeners.forEach(listener => listener(this.currentState));
  }

  // Subscribe to state changes
  subscribe(listener: (state: AudioState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Get current state
  getState(): AudioState {
    return { ...this.currentState };
  }

  // Set audio settings
  setAudioSettings(settings: AudioSettings): void {
    this.audioSettings = settings;
  }

  // Set playback mode
  setPlaybackMode(mode: PlaybackMode): void {
    this.playbackMode = mode;
    this.updateState({ playbackMode: mode });
  }

  // Check if service is available
  isAvailable(): boolean {
    return this.isInitialized;
  }

  // Start playing a group with background audio
  async startGroupPlayback(groupId: string): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Background audio service not initialized');
    }

    try {
      // Stop any current playback
      await this.stopPlayback();

      // Get words for the group
      let words = await OfflineStorage.getGroupWords(groupId);
      if (words.length === 0) {
        // Try to get from API as fallback
        const VocabularyAPI = require('./VocabularyAPI').default;
        words = await VocabularyAPI.getGroupWords(groupId);
      }

      if (words.length === 0) {
        throw new Error('No words found for this group');
      }

      // Sort words by order
      words.sort((a, b) => a.order - b.order);

      this.currentWords = words;
      this.currentGroupId = groupId;

      // Create tracks for background playback
      await this.createPlaylistTracks(words);

      // Set repeat mode based on playback mode
      if (this.playbackMode === 'loop') {
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      } else {
        await TrackPlayer.setRepeatMode(RepeatMode.Off);
      }

      // Update state and start playback
      this.updateState({
        isPlaying: true,
        currentGroupId: groupId,
        currentWordIndex: 0,
        currentPhase: 'english',
        isBuffering: true,
      });

      await TrackPlayer.play();

      console.log(`Started background playback for group ${groupId} with ${words.length} words`);

    } catch (error) {
      console.error('Failed to start background playback:', error);
      this.updateState({
        isPlaying: false,
        isBuffering: false,
      });
      throw error;
    }
  }

  private async createPlaylistTracks(words: VocabularyWord[]): Promise<void> {
    const tracks: Track[] = [];
    const pauseDuration = this.audioSettings?.pauseDuration || 2000;

    for (const word of words) {
      // English track
      tracks.push({
        id: `${word.id}_english`,
        url: this.createTTSUrl(word.english, 'en'),
        title: word.english,
        artist: 'English',
        artwork: undefined,
        duration: 3, // Estimated duration
      });

      // Pause track (silence)
      tracks.push({
        id: `${word.id}_pause`,
        url: this.createSilenceUrl(pauseDuration),
        title: 'Pause',
        artist: 'Silence',
        duration: pauseDuration / 1000,
      });

      // Chinese track  
      tracks.push({
        id: `${word.id}_chinese`,
        url: this.createTTSUrl(word.chinese, 'zh'),
        title: `${word.chinese} (${word.pinyin})`,
        artist: 'Chinese',
        artwork: undefined,
        duration: 3, // Estimated duration
      });
    }

    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
  }

  private createTTSUrl(text: string, language: string): string {
    // For now, we'll use data URLs as placeholders
    // In a production app, you'd integrate with a TTS service or use native TTS
    const encodedText = encodeURIComponent(text);
    return `data:text/plain;charset=utf-8,${encodedText}`;
  }

  private createSilenceUrl(durationMs: number): string {
    // Create a short silence audio data URL
    // This is a minimal WAV file with silence
    const duration = Math.max(1, Math.min(10, durationMs / 1000)); // 1-10 seconds
    return `data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LJeSMFl4rE8N2QQAoUXrTp66hVFApGn+DsuWoXC`;
  }

  // Playback controls
  async togglePlayback(): Promise<void> {
    if (!this.isInitialized) return;

    try {
      const state = await TrackPlayer.getState();
      if (state === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Failed to toggle playback:', error);
    }
  }

  async skipToNext(): Promise<void> {
    if (!this.isInitialized) return;

    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.error('Failed to skip to next:', error);
    }
  }

  async skipToPrevious(): Promise<void> {
    if (!this.isInitialized) return;

    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.error('Failed to skip to previous:', error);
    }
  }

  async setVolume(volume: number): Promise<void> {
    if (!this.isInitialized) return;

    try {
      await TrackPlayer.setVolume(volume);
      this.updateState({ volume });
    } catch (error) {
      console.error('Failed to set volume:', error);
    }
  }

  async stopPlayback(): Promise<void> {
    if (!this.isInitialized) return;

    try {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
      
      this.updateState({
        isPlaying: false,
        currentGroupId: null,
        currentWordIndex: 0,
        currentPhase: 'idle',
        isBuffering: false,
      });

      this.currentWords = [];
      this.currentGroupId = null;
    } catch (error) {
      console.error('Failed to stop playback:', error);
    }
  }

  private async handlePlaybackCompletion(): Promise<void> {
    switch (this.playbackMode) {
      case 'loop':
        // Loop mode: restart the same group
        if (this.currentGroupId) {
          console.log('Looping group playback');
          // TrackPlayer with RepeatMode.Queue should handle this automatically
        }
        break;

      case 'sequential':
        // Sequential mode: move to next group (implement based on needs)
        console.log('Sequential playback completed');
        this.updateState({ isPlaying: false });
        break;

      case 'review':
        // Review mode: play only learned groups
        console.log('Review playback completed');
        this.updateState({ isPlaying: false });
        break;
    }
  }

  // Clean up resources
  async destroy(): Promise<void> {
    try {
      await this.stopPlayback();
      this.listeners = [];
      console.log('Background Audio Service destroyed');
    } catch (error) {
      console.error('Failed to destroy Background Audio Service:', error);
    }
  }
}

export const BackgroundAudio = new BackgroundAudioService();
export default BackgroundAudio;