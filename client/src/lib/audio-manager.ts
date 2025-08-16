// Global audio manager to handle playback across vocabulary groups
import { TTSService } from "@/lib/tts-service";
import type { VocabularyWord, AudioSettings, WordGroup } from "@shared/schema";

export type PlaybackMode = "loop" | "sequential" | "review";

interface AudioState {
  isPlaying: boolean;
  currentGroupId: string | null;
  currentWordIndex: number;
  currentPhase: "idle" | "english" | "pause" | "chinese" | "chinese2";
  playbackMode: PlaybackMode;
}

class AudioManagerClass {
  private state: AudioState = {
    isPlaying: false,
    currentGroupId: null,
    currentWordIndex: 0,
    currentPhase: "idle",
    playbackMode: "loop"
  };

  private isPlayingRef = false;
  private listeners: ((state: AudioState) => void)[] = [];
  private allGroups: WordGroup[] = [];
  private groupWords: Record<string, VocabularyWord[]> = {};
  private audioSettings: AudioSettings | null = null;

  // Subscribe to state changes
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

  // Initialize with groups and words data
  initializeData(groups: WordGroup[], words: Record<string, VocabularyWord[]>, settings: AudioSettings) {
    this.allGroups = groups;
    this.groupWords = words;
    this.audioSettings = settings;
  }

  // Set playback mode
  setPlaybackMode(mode: PlaybackMode) {
    this.setState({ playbackMode: mode });
  }

  // Get current state
  getState() {
    return { ...this.state };
  }

  // Check if review mode is available (has learned groups)
  isReviewModeAvailable(): boolean {
    return this.allGroups.some(group => group.isLearned === 1);
  }

  // Stop any current audio playback
  stopAudio() {
    this.isPlayingRef = false;
    TTSService.stopSpeech();
    this.setState({
      isPlaying: false,
      currentGroupId: null,
      currentWordIndex: 0,
      currentPhase: "idle"
    });
  }

  // Start playing a specific group
  async startGroupPlayback(groupId: string) {
    // Stop any existing playback
    this.stopAudio();

    const words = this.groupWords[groupId];
    if (!words || words.length === 0 || !this.audioSettings) {
      console.error('No words or settings available for group:', groupId);
      return;
    }

    this.isPlayingRef = true;
    this.setState({
      isPlaying: true,
      currentGroupId: groupId,
      currentWordIndex: 0,
      currentPhase: "english"
    });

    try {
      // Initialize voices first
      await TTSService.initializeVoices();

      // Start playback based on mode
      switch (this.state.playbackMode) {
        case "loop":
          await this.playGroupLoop(groupId, words);
          break;
        case "sequential":
          await this.playSequential(groupId);
          break;
        case "review":
          await this.playReview(groupId);
          break;
      }
    } catch (error) {
      console.error('Playback error:', error);
      this.stopAudio();
    }
  }

  // Play group in loop mode (default behavior)
  private async playGroupLoop(groupId: string, words: VocabularyWord[]) {
    console.log('Starting loop playback for group:', groupId, 'with', words.length, 'words');

    // Continuous loop until user stops or starts another group
    while (this.isPlayingRef && this.state.currentGroupId === groupId) {
      console.log('Starting new loop cycle');
      
      for (let i = 0; i < words.length; i++) {
        // Check if user stopped playback or switched groups
        if (!this.isPlayingRef || this.state.currentGroupId !== groupId) {
          console.log('Loop stopped - user action or group switch');
          break;
        }

        this.setState({ currentWordIndex: i });
        await this.playWord(words[i]);

        // Short pause between words
        if (this.isPlayingRef && this.state.currentGroupId === groupId) {
          await this.pause(500); // 0.5 second between words
        }
      }
    }

    // Clean up if this group finished naturally
    if (this.state.currentGroupId === groupId) {
      this.stopAudio();
    }
  }

  // Play sequential mode (move to next group after completion)
  private async playSequential(startGroupId: string) {
    const startIndex = this.allGroups.findIndex(g => g.id === startGroupId);
    if (startIndex === -1) return;

    for (let groupIndex = startIndex; groupIndex < this.allGroups.length; groupIndex++) {
      const group = this.allGroups[groupIndex];
      const words = this.groupWords[group.id];
      
      if (!words || words.length === 0) continue;
      if (!this.isPlayingRef) break;

      // Update current group
      this.setState({ currentGroupId: group.id });
      console.log('Sequential mode: Playing group', group.title);

      // Play all words in this group once
      for (let i = 0; i < words.length; i++) {
        if (!this.isPlayingRef) break;

        this.setState({ currentWordIndex: i });
        await this.playWord(words[i]);

        // Short pause between words
        if (this.isPlayingRef) {
          await this.pause(500);
        }
      }

      // Pause between groups
      if (this.isPlayingRef && groupIndex < this.allGroups.length - 1) {
        await this.pause(2000); // 2 seconds between groups
      }
    }

    this.stopAudio();
  }

  // Play review mode (random learned groups)
  private async playReview(startGroupId: string) {
    const learnedGroups = this.allGroups.filter(g => g.isLearned === 1);
    if (learnedGroups.length === 0) {
      console.log('No learned groups available for review mode');
      this.stopAudio();
      return;
    }

    console.log('Review mode: Playing', learnedGroups.length, 'learned groups randomly');

    // Shuffle learned groups
    const shuffledGroups = [...learnedGroups].sort(() => Math.random() - 0.5);

    for (const group of shuffledGroups) {
      const words = this.groupWords[group.id];
      if (!words || words.length === 0) continue;
      if (!this.isPlayingRef) break;

      // Update current group
      this.setState({ currentGroupId: group.id });
      console.log('Review mode: Playing group', group.title);

      // Play all words in this group once
      for (let i = 0; i < words.length; i++) {
        if (!this.isPlayingRef) break;

        this.setState({ currentWordIndex: i });
        await this.playWord(words[i]);

        // Short pause between words
        if (this.isPlayingRef) {
          await this.pause(500);
        }
      }

      // Pause between groups
      if (this.isPlayingRef) {
        await this.pause(2000); // 2 seconds between groups
      }
    }

    // In review mode, continue with more shuffled rounds
    if (this.isPlayingRef) {
      await this.playReview(startGroupId); // Recursive for continuous review
    }
  }

  // Play a single word with random pattern
  private async playWord(word: VocabularyWord) {
    if (!this.audioSettings) return;

    // Randomly choose pattern for each word: 50% chance for each
    const useEnglishFirst = Math.random() < 0.5;
    console.log('Playing word:', word.englishText, '/', word.chineseText, '(' + word.pinyinText + ')', 
               '- Pattern:', useEnglishFirst ? 'English → Chinese → Chinese' : 'Chinese → Chinese → English');

    if (useEnglishFirst) {
      // Pattern: English → Chinese → Chinese
      await this.speakWithPhase(word.englishText, 'en-US', "english");
      if (!this.isPlayingRef) return;
      
      await this.pauseWithPhase();
      if (!this.isPlayingRef) return;
      
      await this.speakWithPhase(word.chineseText, 'zh-CN', "chinese");
      if (!this.isPlayingRef) return;
      
      await this.pauseWithPhase();
      if (!this.isPlayingRef) return;
      
      await this.speakWithPhase(word.chineseText, 'zh-CN', "chinese2");
    } else {
      // Pattern: Chinese → Chinese → English
      await this.speakWithPhase(word.chineseText, 'zh-CN', "chinese");
      if (!this.isPlayingRef) return;
      
      await this.pauseWithPhase();
      if (!this.isPlayingRef) return;
      
      await this.speakWithPhase(word.chineseText, 'zh-CN', "chinese2");
      if (!this.isPlayingRef) return;
      
      await this.pauseWithPhase();
      if (!this.isPlayingRef) return;
      
      await this.speakWithPhase(word.englishText, 'en-US', "english");
    }
  }

  // Speak text and update phase
  private async speakWithPhase(text: string, language: string, phase: AudioState['currentPhase']) {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: phase });
    try {
      await TTSService.speakWithBestVoice(text, language, this.audioSettings.voiceSpeed, 75);
    } catch (error) {
      console.error(`Speech error for ${phase}:`, error);
    }
  }

  // Pause with phase update
  private async pauseWithPhase() {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: "pause" });
    await this.pause(this.audioSettings.pauseDuration * 1000);
  }

  // Simple pause
  private async pause(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export singleton instance
export const AudioManager = new AudioManagerClass();