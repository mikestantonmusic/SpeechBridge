import * as Speech from 'expo-speech';
import { VOCABULARY_DATA } from '../data/vocabulary';
import { VocabularyWord, AudioState } from '../types';

class MobileAudioManager {
  private currentWords: VocabularyWord[] = [];
  private audioState: AudioState = {
    isPlaying: false,
    currentGroupId: null,
    currentWordIndex: 0,
    currentPhase: "idle",
    playbackMode: "sequential",
    volume: 1,
    isBuffering: false
  };
  private listeners: Array<(state: AudioState) => void> = [];
  private audioSettings: any = {};

  // Subscribe to audio state changes
  subscribe(listener: (state: AudioState) => void): () => void {
    this.listeners.push(listener);
    listener(this.audioState);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.audioState));
  }

  private setState(newState: Partial<AudioState>) {
    this.audioState = { ...this.audioState, ...newState };
    this.notifyListeners();
  }

  setAudioSettings(settings: any) {
    this.audioSettings = settings;
  }

  setPlaybackMode(mode: AudioState["playbackMode"]) {
    this.setState({ playbackMode: mode });
  }

  async stopAudio() {
    Speech.stop();
    this.setState({
      isPlaying: false,
      isBuffering: false,
      currentPhase: "idle"
    });
  }

  async startGroupPlayback(groupId: string): Promise<void> {
    try {
      await this.stopAudio();

      const group = VOCABULARY_DATA.groups.find(g => g.id === groupId);
      const words = group ? group.words : [];

      if (words.length === 0) {
        throw new Error('No words found for this group. Please check your embedded data.');
      }

      words.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      this.currentWords = words;

      this.setState({
        isPlaying: true,
        currentGroupId: groupId,
        currentWordIndex: 0,
        currentPhase: "english",
        isBuffering: false
      });

      console.log(`Starting playback for group ${groupId} with ${words.length} words`);
      await this.playWithSpeechAPI(words, 0);

    } catch (error) {
      console.error('Failed to start group playback:', error);
      this.setState({
        isPlaying: false,
        isBuffering: false
      });
      throw error;
    }
  }

  // Enhanced playback: random pattern and custom pauses
  private async playWithSpeechAPI(words: VocabularyWord[], startIndex: number) {
    const pauseBetweenPhases = 1500; // ms, between each speech
    const pauseBeforeNextWord = 3000; // ms, before next word

    for (let i = startIndex; i < words.length; i++) {
      if (!this.audioState.isPlaying) break;
      const word = words[i];

      // Randomly choose playback pattern
      const pattern = Math.random() < 0.5 ? 'EN_ZH_ZH' : 'ZH_ZH_EN';

      if (pattern === 'EN_ZH_ZH') {
        this.setState({ currentWordIndex: i, currentPhase: "english" });
        await this.speakText(word.english, 'en-US');
        await this.pause(pauseBetweenPhases);

        this.setState({ currentPhase: "chinese" });
        await this.speakText(word.chinese, 'zh-CN');
        await this.pause(pauseBetweenPhases);

        this.setState({ currentPhase: "chinese2" });
        await this.speakText(word.chinese, 'zh-CN');
        await this.pause(pauseBeforeNextWord);
      } else {
        this.setState({ currentWordIndex: i, currentPhase: "chinese" });
        await this.speakText(word.chinese, 'zh-CN');
        await this.pause(pauseBetweenPhases);

        this.setState({ currentPhase: "chinese2" });
        await this.speakText(word.chinese, 'zh-CN');
        await this.pause(pauseBetweenPhases);

        this.setState({ currentPhase: "english" });
        await this.speakText(word.english, 'en-US');
        await this.pause(pauseBeforeNextWord);
      }
    }
    this.setState({ isPlaying: false, currentPhase: "idle" });
  }

  private async speakText(text: string, language: string): Promise<void> {
    return new Promise((resolve) => {
      Speech.speak(text, {
        language,
        onDone: resolve,
        onStopped: resolve,
        onError: (error) => {
          console.error('Speech error:', error);
          resolve();
        },
        rate: this.audioSettings.voiceSpeed || 1.0,
      });
    });
  }

  private async pause(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async skipToPrevious() {
    if (this.audioState.currentWordIndex > 0) {
      this.setState({ currentWordIndex: this.audioState.currentWordIndex - 1 });
      await this.playWithSpeechAPI(this.currentWords, this.audioState.currentWordIndex);
    }
  }

  async skipToNext() {
    if (this.audioState.currentWordIndex < this.currentWords.length - 1) {
      this.setState({ currentWordIndex: this.audioState.currentWordIndex + 1 });
      await this.playWithSpeechAPI(this.currentWords, this.audioState.currentWordIndex);
    }
  }
}

export const AudioManager = new MobileAudioManager();
export default AudioManager;