// Client-only vocabulary service - replaces API calls
import { VOCABULARY_DATA, getGroupById, getWordsForGroup, getGroupsByHSKLevel, getAllWords } from '../data/vocabulary';
import type { VocabularyWord, WordGroup } from '../data/vocabulary';

// User settings storage interface
interface UserSettings {
  audioSettings: {
    pauseDuration: number;
    voiceSpeed: number;
    audioQuality: string;
    languageOrder: string;
  };
  learnedGroups: Set<string>;
  userProgress: {
    [groupId: string]: {
      completedWords: number;
      lastStudied: string;
      streak: number;
    };
  };
}

// Default settings
const DEFAULT_SETTINGS: UserSettings = {
  audioSettings: {
    pauseDuration: 1.0,
    voiceSpeed: 1.0,
    audioQuality: 'high',
    languageOrder: 'english-first'
  },
  learnedGroups: new Set(),
  userProgress: {}
};

class ClientVocabularyService {
  private settings: UserSettings;
  private storageKey = 'chinese_vocab_settings';

  constructor() {
    this.settings = this.loadSettings();
  }

  // Load settings from localStorage/AsyncStorage
  private loadSettings(): UserSettings {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        // Web environment
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          return {
            ...DEFAULT_SETTINGS,
            ...parsed,
            learnedGroups: new Set(parsed.learnedGroups || [])
          };
        }
      }
      // Mobile AsyncStorage would be handled here
      return { ...DEFAULT_SETTINGS };
    } catch (error) {
      console.error('Failed to load settings:', error);
      return { ...DEFAULT_SETTINGS };
    }
  }

  // Save settings to localStorage/AsyncStorage
  private saveSettings(): void {
    try {
      const toSave = {
        ...this.settings,
        learnedGroups: Array.from(this.settings.learnedGroups)
      };
      
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(this.storageKey, JSON.stringify(toSave));
      }
      // Mobile AsyncStorage save would be handled here
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  // API replacement methods - same interface as current backend

  async getAllWordGroups(): Promise<any[]> {
    // Add learned status and convert to backend-compatible format
    return VOCABULARY_DATA.groups.map(group => ({
      id: group.id,
      title: group.name,
      description: group.description,
      isLearned: this.settings.learnedGroups.has(group.id) ? 1 : 0,
      hsklevel: group.hsklevel,
      wordCount: group.wordCount,
      createdAt: new Date(VOCABULARY_DATA.metadata.exportDate)
    }));
  }

  async getGroupWords(groupId: string): Promise<any[]> {
    // Return words in backend-compatible format
    const words = getWordsForGroup(groupId);
    return words.map(word => ({
      id: word.id,
      groupId,
      englishText: word.english,
      chineseText: word.chinese,
      pinyinText: word.pinyin,
      orderIndex: word.order,
      createdAt: new Date(VOCABULARY_DATA.metadata.exportDate)
    }));
  }

  async updateGroupLearnedStatus(groupId: string, isLearned: boolean): Promise<void> {
    if (isLearned) {
      this.settings.learnedGroups.add(groupId);
    } else {
      this.settings.learnedGroups.delete(groupId);
    }
    this.saveSettings();
  }

  async getAudioSettings(): Promise<any> {
    return { 
      id: "client-only-settings",
      ...this.settings.audioSettings 
    };
  }

  async updateAudioSettings(newSettings: Partial<UserSettings['audioSettings']>): Promise<void> {
    this.settings.audioSettings = {
      ...this.settings.audioSettings,
      ...newSettings
    };
    this.saveSettings();
  }

  // Progress tracking methods
  async updateProgress(groupId: string, completedWords: number): Promise<void> {
    this.settings.userProgress[groupId] = {
      completedWords,
      lastStudied: new Date().toISOString(),
      streak: (this.settings.userProgress[groupId]?.streak || 0) + 1
    };
    this.saveSettings();
  }

  async getProgress(groupId: string) {
    return this.settings.userProgress[groupId] || {
      completedWords: 0,
      lastStudied: null,
      streak: 0
    };
  }

  // Utility methods
  private extractGroupNumber(groupName: string): number {
    const match = groupName.match(/HSK \d+ (\d+)$/);
    return match ? parseInt(match[1]) : 1;
  }

  // Search functionality
  searchWords(query: string): VocabularyWord[] {
    const allWords = getAllWords();
    const searchTerm = query.toLowerCase();
    
    return allWords.filter(word => 
      word.english.toLowerCase().includes(searchTerm) ||
      word.chinese.includes(query) ||
      word.pinyin.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by HSK level
  getGroupsByLevel(level: number): WordGroup[] {
    return getGroupsByHSKLevel(level).map(group => ({
      ...group,
      isLearned: this.settings.learnedGroups.has(group.id)
    }));
  }

  // Statistics
  getStats() {
    const totalGroups = VOCABULARY_DATA.metadata.totalGroups;
    const learnedGroups = this.settings.learnedGroups.size;
    const totalWords = VOCABULARY_DATA.metadata.totalWords;
    
    return {
      totalGroups,
      learnedGroups,
      totalWords,
      completionPercentage: Math.round((learnedGroups / totalGroups) * 100),
      hskLevels: VOCABULARY_DATA.metadata.hskLevels
    };
  }
}

// Export singleton instance
export const VocabularyService = new ClientVocabularyService();
export default VocabularyService;