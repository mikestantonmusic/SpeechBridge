import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';

export class AudioManager {
  constructor() {
    this.isPlayingRef = false;
    this.state = {
      currentGroupId: null,
      currentWordIndex: 0,
      currentPhase: "idle",
      playbackMode: "loop" // "loop", "sequential", "review"
    };
    this.audioSettings = {
      pauseDuration: 1.2, // Between English/Chinese within same word
      voiceSpeed: 1.0,
      voiceQuality: 75
    };
    this.listeners = [];
    this.allGroups = [];
    this.groupWords = {};
  }

  // Add state listener
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove state listener
  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  // Update state and notify listeners
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(callback => callback(this.state));
  }

  // Load vocabulary groups and words
  async loadVocabulary(groups, groupWordsData) {
    this.allGroups = groups;
    this.groupWords = groupWordsData;
  }

  // Set playback mode
  setPlaybackMode(mode) {
    console.log('Setting playback mode to:', mode);
    this.setState({ playbackMode: mode });
  }

  // Start audio playback for a group
  async startAudio(groupId) {
    if (!groupId || this.state.currentGroupId === groupId) {
      console.log('Audio already playing for this group or invalid groupId');
      return;
    }

    console.log('Starting audio for group:', groupId, 'Mode:', this.state.playbackMode);
    
    // Stop any existing audio
    await this.stopAudio();
    
    // Set up for new playback
    this.isPlayingRef = true;
    this.setState({ 
      currentGroupId: groupId,
      currentWordIndex: 0,
      currentPhase: "playing"
    });

    // Configure audio session for background playback
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
    } catch (error) {
      console.error('Failed to set audio mode:', error);
    }

    // Start playback based on mode
    switch (this.state.playbackMode) {
      case 'sequential':
        await this.playSequential(groupId);
        break;
      case 'review':
        await this.playReview(groupId);
        break;
      default: // 'loop'
        await this.playGroupLoop(groupId);
        break;
    }
  }

  // Stop audio playback
  async stopAudio() {
    console.log('Stopping audio playback');
    this.isPlayingRef = false;
    
    // Stop any ongoing speech
    try {
      await Speech.stop();
    } catch (error) {
      console.error('Error stopping speech:', error);
    }

    this.setState({ 
      currentGroupId: null,
      currentWordIndex: 0,
      currentPhase: "idle"
    });
  }

  // Play group in loop mode (default)
  async playGroupLoop(groupId) {
    while (this.isPlayingRef && this.state.currentGroupId === groupId) {
      console.log('Starting new loop cycle');
      const words = this.groupWords[groupId];
      
      if (!words || words.length === 0) {
        console.log('No words found for group:', groupId);
        this.stopAudio();
        return;
      }

      // Play all words in this group once
      for (let i = 0; i < words.length; i++) {
        if (!this.isPlayingRef || this.state.currentGroupId !== groupId) break;

        this.setState({ currentWordIndex: i });
        await this.playWord(words[i]);

        // 2-second pause between words (updated timing)
        if (this.isPlayingRef && this.state.currentGroupId === groupId) {
          await this.pause(2000); // 2 seconds between words
        }
      }
    }

    // Clean up if this group finished naturally
    if (this.state.currentGroupId === groupId) {
      this.stopAudio();
    }
  }

  // Play sequential mode (move to next group after completion)
  async playSequential(startGroupId) {
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

        // 2-second pause between words
        if (this.isPlayingRef) {
          await this.pause(2000);
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
  async playReview(startGroupId) {
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

        // 2-second pause between words
        if (this.isPlayingRef) {
          await this.pause(2000);
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
  async playWord(word) {
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
  async speakWithPhase(text, language, phase) {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: phase });
    try {
      await this.speak(text, language);
    } catch (error) {
      console.error(`Speech error for ${phase}:`, error);
    }
  }

  // Pause with phase update
  async pauseWithPhase() {
    if (!this.audioSettings) return;
    
    this.setState({ currentPhase: "pause" });
    await this.pause(this.audioSettings.pauseDuration * 1000);
  }

  // Simple pause helper
  async pause(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  // Speak text using Expo Speech
  async speak(text, language) {
    return new Promise((resolve, reject) => {
      const options = {
        language: language,
        rate: this.audioSettings.voiceSpeed,
        onDone: () => resolve(),
        onError: (error) => reject(error),
        onStopped: () => resolve()
      };

      Speech.speak(text, options);
    });
  }
}

// Export singleton instance
export const audioManager = new AudioManager();