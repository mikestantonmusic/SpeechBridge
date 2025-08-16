// Offline storage service for downloading and caching vocabulary groups
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import { WordGroup, VocabularyWord, DownloadProgress, AppSettings } from '../types';
import VocabularyAPI from './VocabularyAPI';

class OfflineStorageService {
  private readonly STORAGE_KEYS = {
    DOWNLOADED_GROUPS: 'downloaded_groups',
    GROUP_WORDS: 'group_words_',
    APP_SETTINGS: 'app_settings',
    DOWNLOAD_PROGRESS: 'download_progress',
    USER_PROGRESS: 'user_progress',
    LAST_SYNC: 'last_sync'
  };

  private readonly AUDIO_CACHE_DIR = `${FileSystem.documentDirectory}audio_cache/`;
  private downloadListeners: ((progress: DownloadProgress) => void)[] = [];

  constructor() {
    this.ensureDirectoriesExist();
  }

  private async ensureDirectoriesExist() {
    try {
      const dirInfo = await FileSystem.getInfoAsync(this.AUDIO_CACHE_DIR);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(this.AUDIO_CACHE_DIR, { intermediates: true });
      }
    } catch (error) {
      console.error('Failed to create audio cache directory:', error);
    }
  }

  // Subscribe to download progress updates
  subscribeToDownloadProgress(listener: (progress: DownloadProgress) => void) {
    this.downloadListeners.push(listener);
    return () => {
      this.downloadListeners = this.downloadListeners.filter(l => l !== listener);
    };
  }

  private notifyDownloadProgress(progress: DownloadProgress) {
    this.downloadListeners.forEach(listener => listener(progress));
  }

  // Save downloaded groups metadata
  async saveDownloadedGroups(groups: WordGroup[]): Promise<void> {
    try {
      const groupsWithDownloadInfo = groups.map(group => ({
        ...group,
        isDownloaded: true,
        downloadedAt: new Date()
      }));
      
      await AsyncStorage.setItem(
        this.STORAGE_KEYS.DOWNLOADED_GROUPS,
        JSON.stringify(groupsWithDownloadInfo)
      );
    } catch (error) {
      console.error('Failed to save downloaded groups:', error);
      throw error;
    }
  }

  // Get all downloaded groups
  async getDownloadedGroups(): Promise<WordGroup[]> {
    try {
      const data = await AsyncStorage.getItem(this.STORAGE_KEYS.DOWNLOADED_GROUPS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to get downloaded groups:', error);
      return [];
    }
  }

  // Save words for a specific group
  async saveGroupWords(groupId: string, words: VocabularyWord[]): Promise<void> {
    try {
      await AsyncStorage.setItem(
        this.STORAGE_KEYS.GROUP_WORDS + groupId,
        JSON.stringify(words)
      );
    } catch (error) {
      console.error(`Failed to save words for group ${groupId}:`, error);
      throw error;
    }
  }

  // Get words for a specific group
  async getGroupWords(groupId: string): Promise<VocabularyWord[]> {
    try {
      const data = await AsyncStorage.getItem(this.STORAGE_KEYS.GROUP_WORDS + groupId);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Failed to get words for group ${groupId}:`, error);
      return [];
    }
  }

  // Download a single group with progress tracking
  async downloadGroup(group: WordGroup): Promise<void> {
    const progress: DownloadProgress = {
      groupId: group.id,
      groupName: group.name,
      progress: 0,
      status: 'downloading',
      totalWords: 0,
      downloadedWords: 0
    };

    try {
      this.notifyDownloadProgress(progress);

      // Download vocabulary words
      const words = await VocabularyAPI.getGroupWords(group.id);
      progress.totalWords = words.length;
      progress.progress = 50;
      progress.downloadedWords = words.length;
      this.notifyDownloadProgress(progress);

      // Save words to local storage
      await this.saveGroupWords(group.id, words);
      
      progress.progress = 75;
      this.notifyDownloadProgress(progress);

      // Update downloaded groups list
      const downloadedGroups = await this.getDownloadedGroups();
      const updatedGroups = downloadedGroups.filter(g => g.id !== group.id);
      updatedGroups.push({
        ...group,
        isDownloaded: true,
        downloadedAt: new Date(),
        wordCount: words.length
      });
      
      await this.saveDownloadedGroups(updatedGroups);

      progress.progress = 100;
      progress.status = 'completed';
      this.notifyDownloadProgress(progress);

      console.log(`Successfully downloaded group: ${group.name} with ${words.length} words`);

    } catch (error) {
      console.error(`Failed to download group ${group.name}:`, error);
      progress.status = 'error';
      progress.error = error instanceof Error ? error.message : 'Download failed';
      this.notifyDownloadProgress(progress);
      throw error;
    }
  }

  // Download multiple groups
  async downloadMultipleGroups(groups: WordGroup[]): Promise<void> {
    for (const group of groups) {
      try {
        await this.downloadGroup(group);
      } catch (error) {
        console.error(`Failed to download group ${group.name}:`, error);
        // Continue with other groups even if one fails
      }
    }
  }

  // Remove a downloaded group
  async removeDownloadedGroup(groupId: string): Promise<void> {
    try {
      // Remove words data
      await AsyncStorage.removeItem(this.STORAGE_KEYS.GROUP_WORDS + groupId);

      // Update downloaded groups list
      const downloadedGroups = await this.getDownloadedGroups();
      const updatedGroups = downloadedGroups.filter(g => g.id !== groupId);
      await this.saveDownloadedGroups(updatedGroups);

      // Remove cached audio files (if any)
      await this.removeGroupAudioCache(groupId);

    } catch (error) {
      console.error(`Failed to remove downloaded group ${groupId}:`, error);
      throw error;
    }
  }

  // Check if a group is downloaded
  async isGroupDownloaded(groupId: string): Promise<boolean> {
    const downloadedGroups = await this.getDownloadedGroups();
    return downloadedGroups.some(g => g.id === groupId);
  }

  // Get storage usage statistics
  async getStorageStats(): Promise<{
    totalGroups: number;
    totalWords: number;
    estimatedSizeMB: number;
    lastSyncDate: Date | null;
  }> {
    try {
      const downloadedGroups = await this.getDownloadedGroups();
      const totalGroups = downloadedGroups.length;
      
      let totalWords = 0;
      for (const group of downloadedGroups) {
        const words = await this.getGroupWords(group.id);
        totalWords += words.length;
      }

      // Estimate storage size (rough calculation)
      const estimatedSizeMB = (totalWords * 0.5) / 1024; // ~0.5KB per word

      const lastSyncData = await AsyncStorage.getItem(this.STORAGE_KEYS.LAST_SYNC);
      const lastSyncDate = lastSyncData ? new Date(lastSyncData) : null;

      return {
        totalGroups,
        totalWords,
        estimatedSizeMB: Math.round(estimatedSizeMB * 100) / 100,
        lastSyncDate
      };
    } catch (error) {
      console.error('Failed to get storage stats:', error);
      return {
        totalGroups: 0,
        totalWords: 0,
        estimatedSizeMB: 0,
        lastSyncDate: null
      };
    }
  }

  // Save app settings
  async saveAppSettings(settings: AppSettings): Promise<void> {
    try {
      await AsyncStorage.setItem(this.STORAGE_KEYS.APP_SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save app settings:', error);
      throw error;
    }
  }

  // Get app settings with defaults
  async getAppSettings(): Promise<AppSettings> {
    try {
      const data = await AsyncStorage.getItem(this.STORAGE_KEYS.APP_SETTINGS);
      return data ? JSON.parse(data) : {
        downloadOnWifiOnly: true,
        backgroundAudioEnabled: true,
        lockScreenControls: true,
        autoDownloadUpdates: false,
        maxStorageSize: 500 // 500MB default
      };
    } catch (error) {
      console.error('Failed to get app settings:', error);
      return {
        downloadOnWifiOnly: true,
        backgroundAudioEnabled: true,
        lockScreenControls: true,
        autoDownloadUpdates: false,
        maxStorageSize: 500
      };
    }
  }

  // Clear all offline data
  async clearAllData(): Promise<void> {
    try {
      const downloadedGroups = await this.getDownloadedGroups();
      
      // Remove all group words
      for (const group of downloadedGroups) {
        await AsyncStorage.removeItem(this.STORAGE_KEYS.GROUP_WORDS + group.id);
      }

      // Remove main storage keys
      await AsyncStorage.multiRemove([
        this.STORAGE_KEYS.DOWNLOADED_GROUPS,
        this.STORAGE_KEYS.DOWNLOAD_PROGRESS,
        this.STORAGE_KEYS.USER_PROGRESS,
        this.STORAGE_KEYS.LAST_SYNC
      ]);

      // Clear audio cache directory
      await this.clearAudioCache();

    } catch (error) {
      console.error('Failed to clear all data:', error);
      throw error;
    }
  }

  // Audio cache management
  private async removeGroupAudioCache(groupId: string): Promise<void> {
    try {
      const groupCacheDir = `${this.AUDIO_CACHE_DIR}${groupId}/`;
      const dirInfo = await FileSystem.getInfoAsync(groupCacheDir);
      if (dirInfo.exists) {
        await FileSystem.deleteAsync(groupCacheDir);
      }
    } catch (error) {
      console.error(`Failed to remove audio cache for group ${groupId}:`, error);
    }
  }

  private async clearAudioCache(): Promise<void> {
    try {
      const dirInfo = await FileSystem.getInfoAsync(this.AUDIO_CACHE_DIR);
      if (dirInfo.exists) {
        await FileSystem.deleteAsync(this.AUDIO_CACHE_DIR);
        await this.ensureDirectoriesExist();
      }
    } catch (error) {
      console.error('Failed to clear audio cache:', error);
    }
  }

  // Update last sync timestamp
  async updateLastSync(): Promise<void> {
    try {
      await AsyncStorage.setItem(this.STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    } catch (error) {
      console.error('Failed to update last sync:', error);
    }
  }
}

export const OfflineStorage = new OfflineStorageService();
export default OfflineStorage;