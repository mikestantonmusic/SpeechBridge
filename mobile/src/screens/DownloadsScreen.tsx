import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { WordGroup, DownloadProgress } from '../types';
import OfflineStorage from '../services/OfflineStorage';
import VocabularyAPI from '../services/VocabularyAPI';
import { APP_CONFIG } from '../utils/constants';

interface DownloadableGroup extends WordGroup {
  isDownloaded: boolean;
  downloadedAt?: Date;
  isDownloading: boolean;
  downloadProgress: number;
}

export default function DownloadsScreen() {
  const [downloadedGroups, setDownloadedGroups] = useState<DownloadableGroup[]>([]);
  const [availableGroups, setAvailableGroups] = useState<DownloadableGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [storageStats, setStorageStats] = useState({
    totalGroups: 0,
    totalWords: 0,
    estimatedSizeMB: 0,
  });

  useEffect(() => {
    loadDownloadData();
    setupDownloadListener();
  }, []);

  const setupDownloadListener = () => {
    const unsubscribe = OfflineStorage.subscribeToDownloadProgress((progress: DownloadProgress) => {
      // Update download progress for groups
      const updateGroups = (groups: DownloadableGroup[]) =>
        groups.map(group => {
          if (group.id === progress.groupId) {
            return {
              ...group,
              isDownloading: progress.status === 'downloading',
              downloadProgress: progress.progress,
              isDownloaded: progress.status === 'completed',
              downloadedAt: progress.status === 'completed' ? new Date() : group.downloadedAt,
            };
          }
          return group;
        });

      setDownloadedGroups(prev => updateGroups(prev));
      setAvailableGroups(prev => updateGroups(prev));

      if (progress.status === 'completed' || progress.status === 'error') {
        loadDownloadData(); // Refresh data after download completes
      }
    });

    return unsubscribe;
  };

  const loadDownloadData = async () => {
    try {
      setLoading(true);

      // Check online status
      const online = await VocabularyAPI.checkConnection();
      setIsOnline(online);

      // Get downloaded groups
      const downloaded = await OfflineStorage.getDownloadedGroups();
      const downloadedWithStatus: DownloadableGroup[] = downloaded.map(group => ({
        ...group,
        isDownloaded: true,
        isDownloading: false,
        downloadProgress: 100,
      }));

      setDownloadedGroups(downloadedWithStatus);

      // Get available groups (only if online)
      if (online) {
        const allGroups = await VocabularyAPI.getWordGroups();
        const downloadedIds = new Set(downloaded.map(g => g.id));
        
        const availableWithStatus: DownloadableGroup[] = allGroups
          .filter(group => !downloadedIds.has(group.id))
          .map(group => ({
            ...group,
            isDownloaded: false,
            isDownloading: false,
            downloadProgress: 0,
          }))
          .sort((a, b) => {
            if (a.hsklevel !== b.hsklevel) return a.hsklevel - b.hsklevel;
            return a.groupNumber - b.groupNumber;
          });

        setAvailableGroups(availableWithStatus);
      } else {
        setAvailableGroups([]);
      }

      // Get storage stats
      const stats = await OfflineStorage.getStorageStats();
      setStorageStats(stats);

    } catch (error) {
      console.error('Failed to load download data:', error);
      Alert.alert('Error', 'Failed to load download information');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadGroup = async (group: DownloadableGroup) => {
    if (!isOnline) {
      Alert.alert('No Connection', 'Please connect to the internet to download groups.');
      return;
    }

    try {
      await OfflineStorage.downloadGroup(group);
    } catch (error) {
      console.error('Download failed:', error);
      Alert.alert('Download Failed', 'Failed to download this group. Please try again.');
    }
  };

  const handleRemoveGroup = (group: DownloadableGroup) => {
    Alert.alert(
      'Remove Download',
      `Remove ${group.name}? You'll need to download it again to use offline.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await OfflineStorage.removeDownloadedGroup(group.id);
              await loadDownloadData();
            } catch (error) {
              console.error('Failed to remove group:', error);
              Alert.alert('Error', 'Failed to remove download.');
            }
          }
        }
      ]
    );
  };

  const handleDownloadAllHSKLevel = async (level: number) => {
    if (!isOnline) {
      Alert.alert('No Connection', 'Please connect to the internet to download groups.');
      return;
    }

    const levelGroups = availableGroups.filter(g => g.hsklevel === level);
    
    if (levelGroups.length === 0) {
      Alert.alert('No Groups', `All HSK ${level} groups are already downloaded.`);
      return;
    }

    Alert.alert(
      'Download HSK Level',
      `Download all ${levelGroups.length} groups for HSK Level ${level}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Download',
          onPress: async () => {
            try {
              await OfflineStorage.downloadMultipleGroups(levelGroups);
            } catch (error) {
              console.error('Batch download failed:', error);
              Alert.alert('Download Failed', 'Some downloads may have failed. Please check individual groups.');
            }
          }
        }
      ]
    );
  };

  const renderGroupItem = ({ item: group }: { item: DownloadableGroup }) => (
    <View style={styles.groupItem}>
      <View style={styles.groupInfo}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupName}>{group.name}</Text>
          <View 
            style={[
              styles.levelBadge,
              { backgroundColor: APP_CONFIG.HSK_COLORS[group.hsklevel as keyof typeof APP_CONFIG.HSK_COLORS] }
            ]}
          >
            <Text style={styles.levelBadgeText}>HSK {group.hsklevel}</Text>
          </View>
        </View>
        
        <Text style={styles.groupDescription}>{group.description}</Text>
        
        {group.downloadedAt && (
          <Text style={styles.downloadDate}>
            Downloaded: {group.downloadedAt.toLocaleDateString()}
          </Text>
        )}

        {group.isDownloading && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[styles.progressFill, { width: `${group.downloadProgress}%` }]} 
              />
            </View>
            <Text style={styles.progressText}>{group.downloadProgress}%</Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.actionButton,
          group.isDownloaded ? styles.removeButton : styles.downloadButton,
          group.isDownloading && styles.disabledButton
        ]}
        onPress={() => group.isDownloaded ? handleRemoveGroup(group) : handleDownloadGroup(group)}
        disabled={group.isDownloading}
      >
        {group.isDownloading ? (
          <ActivityIndicator size="small" color="#1e40af" />
        ) : (
          <MaterialIcons 
            name={group.isDownloaded ? "delete" : "download"} 
            size={20} 
            color={group.isDownloaded ? "#ef4444" : "#1e40af"} 
          />
        )}
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#1e40af" />
        <Text style={styles.loadingText}>Loading download information...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with Stats */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Download Manager</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <MaterialIcons name="download-done" size={16} color="#10b981" />
            <Text style={styles.statText}>{storageStats.totalGroups} Downloaded</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="storage" size={16} color="#6b7280" />
            <Text style={styles.statText}>{storageStats.estimatedSizeMB} MB</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={[
          { type: 'downloaded', title: 'Downloaded Groups', data: downloadedGroups },
          ...(isOnline ? [{ type: 'available', title: 'Available for Download', data: availableGroups }] : [])
        ]}
        keyExtractor={(item, index) => `${item.type}-${index}`}
        renderItem={({ item: section }) => (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.type === 'available' && section.data.length > 0 && (
                <View style={styles.batchDownloadButtons}>
                  {[1, 2, 3, 4, 5, 6].map(level => {
                    const levelCount = section.data.filter(g => g.hsklevel === level).length;
                    return levelCount > 0 ? (
                      <TouchableOpacity
                        key={level}
                        style={styles.levelDownloadButton}
                        onPress={() => handleDownloadAllHSKLevel(level)}
                      >
                        <Text style={styles.levelDownloadText}>HSK {level} ({levelCount})</Text>
                      </TouchableOpacity>
                    ) : null;
                  })}
                </View>
              )}
            </View>

            {section.data.length === 0 ? (
              <View style={styles.emptyState}>
                <MaterialIcons 
                  name={section.type === 'downloaded' ? "folder-open" : "cloud-download"} 
                  size={48} 
                  color="#9ca3af" 
                />
                <Text style={styles.emptyText}>
                  {section.type === 'downloaded' 
                    ? 'No groups downloaded yet'
                    : isOnline 
                      ? 'All groups are already downloaded'
                      : 'Connect to internet to see available downloads'
                  }
                </Text>
              </View>
            ) : (
              section.data.map(group => (
                <View key={group.id}>
                  {renderGroupItem({ item: group })}
                </View>
              ))
            )}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#6b7280',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 12,
  },
  section: {
    margin: 20,
    marginBottom: 0,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  batchDownloadButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  levelDownloadButton: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1e40af',
  },
  levelDownloadText: {
    fontSize: 12,
    color: '#1e40af',
    fontWeight: '600',
  },
  groupItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  groupInfo: {
    flex: 1,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  groupDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  downloadDate: {
    fontSize: 12,
    color: '#10b981',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1e40af',
  },
  progressText: {
    fontSize: 12,
    color: '#1e40af',
    minWidth: 30,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#eff6ff',
  },
  removeButton: {
    backgroundColor: '#fef2f2',
  },
  disabledButton: {
    opacity: 0.5,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 12,
    textAlign: 'center',
  },
});