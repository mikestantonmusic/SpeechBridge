// API service to connect with the Replit backend vocabulary system
import { WordGroup, VocabularyWord, AudioSettings } from '../types';

// Note: Update this URL with your actual Replit app URL when testing
const API_BASE_URL = 'https://chinese-vocabulary-learning-app.your-username.repl.co/api';

class VocabularyAPIService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Update base URL for development/production
  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Fetch all word groups
  async getWordGroups(): Promise<WordGroup[]> {
    return this.makeRequest<WordGroup[]>('/word-groups');
  }

  // Fetch words for a specific group
  async getGroupWords(groupId: string): Promise<VocabularyWord[]> {
    return this.makeRequest<VocabularyWord[]>(`/word-groups/${groupId}/words`);
  }

  // Get audio settings
  async getAudioSettings(): Promise<AudioSettings> {
    return this.makeRequest<AudioSettings>('/audio-settings');
  }

  // Update audio settings
  async updateAudioSettings(settings: Partial<AudioSettings>): Promise<AudioSettings> {
    return this.makeRequest<AudioSettings>('/audio-settings', {
      method: 'POST',
      body: JSON.stringify(settings),
    });
  }

  // Mark group as learned/unlearned
  async updateGroupLearnedStatus(groupId: string, isLearned: boolean): Promise<void> {
    await this.makeRequest(`/word-groups/${groupId}/learned`, {
      method: 'POST',
      body: JSON.stringify({ isLearned }),
    });
  }

  // Batch download multiple groups for offline use
  async downloadGroupsForOffline(groupIds: string[]): Promise<{
    groups: WordGroup[];
    words: Record<string, VocabularyWord[]>;
  }> {
    const groups = await this.getWordGroups();
    const targetGroups = groups.filter(g => groupIds.includes(g.id));
    
    const words: Record<string, VocabularyWord[]> = {};
    
    // Download words for each group
    for (const group of targetGroups) {
      try {
        words[group.id] = await this.getGroupWords(group.id);
      } catch (error) {
        console.error(`Failed to download words for group ${group.id}:`, error);
        words[group.id] = [];
      }
    }

    return { groups: targetGroups, words };
  }

  // Check server connectivity
  async checkConnection(): Promise<boolean> {
    try {
      await this.makeRequest('/word-groups');
      return true;
    } catch {
      return false;
    }
  }

  // Get HSK level groups
  async getHSKLevelGroups(level: number): Promise<WordGroup[]> {
    const allGroups = await this.getWordGroups();
    return allGroups.filter(group => group.hsklevel === level);
  }

  // Get total vocabulary statistics
  async getVocabularyStats(): Promise<{
    totalWords: number;
    totalGroups: number;
    hskLevels: number;
    groupsByLevel: Record<number, number>;
  }> {
    const groups = await this.getWordGroups();
    
    let totalWords = 0;
    const groupsByLevel: Record<number, number> = {};
    
    for (const group of groups) {
      if (group.wordCount) {
        totalWords += group.wordCount;
      }
      
      groupsByLevel[group.hsklevel] = (groupsByLevel[group.hsklevel] || 0) + 1;
    }
    
    return {
      totalWords,
      totalGroups: groups.length,
      hskLevels: Object.keys(groupsByLevel).length,
      groupsByLevel
    };
  }
}

export const VocabularyAPI = new VocabularyAPIService();
export default VocabularyAPI;