// Mobile vocabulary service - replaces API calls with embedded data
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VOCABULARY_DATA, getWordsForGroup, VocabularyWord as EmbeddedVocabWord, WordGroup as EmbeddedWordGroup } from '../data/vocabulary';
import { WordGroup, VocabularyWord, AudioSettings } from '../types';

interface UserSettings {
  audioSettings: {
    pauseDuration: number;
    voiceSpeed: number;
    audioQuality: string;
    languageOrder: string;
  };
  learnedGroups: Set<string>;
  downloadedGroups: Set<string>;
}

class VocabularyService {
  private settings: UserSettings = {
    audioSettings: {
      pauseDuration: 1.0,
      voiceSpeed: 1.0,
      audioQuality: "high",
      languageOrder: "english-first",
    },
    learnedGroups: new Set(),
    downloadedGroups: new Set(),
  };

  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      // Load settings from AsyncStorage
      const settingsJson = await AsyncStorage.getItem('vocabularySettings');
      if (settingsJson) {
        const stored = JSON.parse(settingsJson);
        this.settings = {
          audioSettings: { ...this.settings.audioSettings, ...stored.audioSettings },
          learnedGroups: new Set(stored.learnedGroups || []),
          downloadedGroups: new Set(stored.downloadedGroups || []),
        };
      }
      
      // Mark all groups as "downloaded" since they're embedded
      this.settings.downloadedGroups = new Set(VOCABULARY_DATA.groups.map(g => g.id));
      await this.saveSettings();
      
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize VocabularyService:', error);
      this.initialized = true; // Continue with defaults
    }
  }

  private async saveSettings(): Promise<void> {
    try {
      const toSave = {
        audioSettings: this.settings.audioSettings,
        learnedGroups: Array.from(this.settings.learnedGroups),
        downloadedGroups: Array.from(this.settings.downloadedGroups),
      };
      await AsyncStorage.setItem('vocabularySettings', JSON.stringify(toSave));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  // API replacement methods - same interface as backend API

  async getWordGroups(): Promise<WordGroup[]> {
    await this.initialize();
    
  return VOCABULARY_DATA.groups.map(group => ({
    id: group.id,
    name: group.name,
    description: group.description || "",
    hsklevel: group.hsklevel,
    wordCount: group.wordCount,
    words: group.words, // <-- Add this line
    isLearned: this.settings.learnedGroups.has(group.id),
    groupNumber: this.extractGroupNumber(group.name),
    order: group.hsklevel * 100 + this.extractGroupNumber(group.name),
    isDownloaded: true, // All data is embedded
    downloadedAt: VOCABULARY_DATA.metadata.exportDate
  }));
  }

  async getGroupWords(groupId: string): Promise<VocabularyWord[]> {
    await this.initialize();
    
    const words = getWordsForGroup(groupId);
    return words.map(word => ({
      id: word.id,
      english: word.english,
      chinese: word.chinese,
      pinyin: word.pinyin,
      order: word.order,
      groupId
    }));
  }

  async getAudioSettings(): Promise<AudioSettings> {
    await this.initialize();
    return {
      id: "mobile-client-settings",
      pauseDuration: this.settings.audioSettings.pauseDuration,
      voiceSpeed: this.settings.audioSettings.voiceSpeed,
      audioQuality: this.settings.audioSettings.audioQuality,
      languageOrder: this.settings.audioSettings.languageOrder
    };
  }

  async updateAudioSettings(newSettings: Partial<AudioSettings>): Promise<AudioSettings> {
    await this.initialize();
    
    const { id, ...settingsToUpdate } = newSettings;
    this.settings.audioSettings = {
      ...this.settings.audioSettings,
      ...settingsToUpdate
    };
    
    await this.saveSettings();
    return this.getAudioSettings();
  }

  async updateGroupLearnedStatus(groupId: string, isLearned: boolean): Promise<void> {
    await this.initialize();
    
    if (isLearned) {
      this.settings.learnedGroups.add(groupId);
    } else {
      this.settings.learnedGroups.delete(groupId);
    }
    await this.saveSettings();
  }

  // Batch operations for mobile compatibility
  async downloadGroupsForOffline(groupIds: string[]): Promise<{
    groups: WordGroup[];
    words: Record<string, VocabularyWord[]>;
  }> {
    await this.initialize();
    
    // All groups are already "downloaded" since embedded
    const groups = await this.getWordGroups();
    const words: Record<string, VocabularyWord[]> = {};
    
    for (const groupId of groupIds) {
      words[groupId] = await this.getGroupWords(groupId);
      this.settings.downloadedGroups.add(groupId);
    }
    
    await this.saveSettings();
    
    return {
      groups: groups.filter(g => groupIds.includes(g.id)),
      words
    };
  }

  async getDownloadedGroups(): Promise<WordGroup[]> {
    await this.initialize();
    const allGroups = await this.getWordGroups();
    return allGroups; // All groups are "downloaded"
  }

  async deleteDownloadedGroup(groupId: string): Promise<void> {
    await this.initialize();
    // Can't actually delete embedded data, but can mark as "not downloaded"
    this.settings.downloadedGroups.delete(groupId);
    await this.saveSettings();
  }

  // Additional mobile-specific methods
  async searchWords(query: string): Promise<VocabularyWord[]> {
    await this.initialize();
    
    const allWords: VocabularyWord[] = [];
    for (const group of VOCABULARY_DATA.groups) {
      const words = await this.getGroupWords(group.id);
      allWords.push(...words);
    }
    
    const searchTerm = query.toLowerCase();
    return allWords.filter(word => 
      word.english.toLowerCase().includes(searchTerm) ||
      word.chinese.includes(query) ||
      word.pinyin.toLowerCase().includes(searchTerm)
    );
  }

  async getGroupsByLevel(level: number): Promise<WordGroup[]> {
    await this.initialize();
    const allGroups = await this.getWordGroups();
    return allGroups.filter(group => group.hsklevel === level);
  }

  async getStats(): Promise<{
    totalGroups: number;
    learnedGroups: number;
    downloadedGroups: number;
    totalWords: number;
    completionPercentage: number;
  }> {
    await this.initialize();
    
    const totalGroups = VOCABULARY_DATA.groups.length;
    const learnedGroups = this.settings.learnedGroups.size;
    const downloadedGroups = this.settings.downloadedGroups.size;
    const totalWords = VOCABULARY_DATA.metadata.totalWords;
    const completionPercentage = Math.round((learnedGroups / totalGroups) * 100);
    
    return {
      totalGroups,
      learnedGroups,
      downloadedGroups,
      totalWords,
      completionPercentage
    };
  }

  // Helper method to extract group number from name
  private extractGroupNumber(name: string): number {
    const match = name.match(/HSK\s*(\d+)-(\d+)/i);
    return match ? parseInt(match[2]) : 0;
  }

  // Check if group is downloaded (always true for embedded data)
  async isGroupDownloaded(groupId: string): Promise<boolean> {
    return true; // All groups are embedded
  }

  // Get offline status (always true for embedded data)
  async isOfflineReady(): Promise<boolean> {
    return true; // Always offline ready
  }
}

// Export singleton instance
export default new VocabularyService();