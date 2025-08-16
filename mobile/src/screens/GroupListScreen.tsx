import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { WordGroup, DownloadProgress } from '../types';
import VocabularyAPI from '../services/VocabularyAPI';
import OfflineStorage from '../services/OfflineStorage';
import { APP_CONFIG } from '../utils/constants';

type RootStackParamList = {
  Home: undefined;
  GroupList: undefined;
  Vocabulary: { groupId: string; groupName: string; hsklevel: number };
  Settings: undefined;
  Downloads: undefined;
};

type GroupListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GroupList'>;
type GroupListScreenRouteProp = RouteProp<RootStackParamList, 'GroupList'>;

interface Props {
  navigation: GroupListScreenNavigationProp;
  route: GroupListScreenRouteProp;
}

interface GroupWithDownloadStatus extends WordGroup {
  isDownloaded: boolean;
  isDownloading: boolean;
  downloadProgress: number;
}

export default function GroupListScreen({ navigation }: Props) {
  const [groups, setGroups] = useState<GroupWithDownloadStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [downloadingGroups, setDownloadingGroups] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadGroups();
    setupDownloadListener();
  }, []);

  const setupDownloadListener = () => {
    const unsubscribe = OfflineStorage.subscribeToDownloadProgress((progress: DownloadProgress) => {
      setGroups(prev => prev.map(group => {
        if (group.id === progress.groupId) {
          return {
            ...group,
            isDownloading: progress.status === 'downloading',
            downloadProgress: progress.progress,
            isDownloaded: progress.status === 'completed'
          };
        }
        return group;
      }));

      if (progress.status === 'completed' || progress.status === 'error') {
        setDownloadingGroups(prev => {
          const newSet = new Set(prev);
          newSet.delete(progress.groupId);
          return newSet;
        });
      }
    });

    return unsubscribe;
  };

  const loadGroups = async () => {
    try {
      setLoading(true);

      // Check online status
      const online = await VocabularyAPI.checkConnection();
      setIsOnline(online);

      let allGroups: WordGroup[] = [];

      if (online) {
        // Load from API
        allGroups = await VocabularyAPI.getWordGroups();
      } else {
        // Load only downloaded groups when offline
        allGroups = await OfflineStorage.getDownloadedGroups();
      }

      // Get download status for each group
      const downloadedGroups = await OfflineStorage.getDownloadedGroups();
      const downloadedIds = new Set(downloadedGroups.map(g => g.id));

      const groupsWithStatus: GroupWithDownloadStatus[] = allGroups.map(group => ({
        ...group,
        isDownloaded: downloadedIds.has(group.id),
        isDownloading: downloadingGroups.has(group.id),
        downloadProgress: 0
      }));

      // Sort by HSK level and group number
      groupsWithStatus.sort((a, b) => {
        if (a.hsklevel !== b.hsklevel) {
          return a.hsklevel - b.hsklevel;
        }
        return a.groupNumber - b.groupNumber;
      });

      setGroups(groupsWithStatus);

    } catch (error) {
      console.error('Failed to load groups:', error);
      Alert.alert(
        'Error',
        'Failed to load vocabulary groups. Please check your connection and try again.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadGroups();
  }, []);

  const handleGroupPress = (group: GroupWithDownloadStatus) => {
    if (!group.isDownloaded && !isOnline) {
      Alert.alert(
        'Offline Mode',
        'This group is not downloaded yet. Please connect to the internet to download it first.'
      );
      return;
    }

    navigation.navigate('Vocabulary', {
      groupId: group.id,
      groupName: group.name,
      hsklevel: group.hsklevel
    });
  };

  const handleDownloadGroup = async (group: GroupWithDownloadStatus) => {
    if (!isOnline) {
      Alert.alert('No Connection', 'Please connect to the internet to download groups.');
      return;
    }

    if (group.isDownloading) {
      return;
    }

    try {
      setDownloadingGroups(prev => new Set(prev).add(group.id));
      setGroups(prev => prev.map(g => 
        g.id === group.id ? { ...g, isDownloading: true, downloadProgress: 0 } : g
      ));

      await OfflineStorage.downloadGroup(group);

    } catch (error) {
      console.error('Download failed:', error);
      Alert.alert('Download Failed', 'Failed to download this group. Please try again.');
      
      setDownloadingGroups(prev => {
        const newSet = new Set(prev);
        newSet.delete(group.id);
        return newSet;
      });
      setGroups(prev => prev.map(g => 
        g.id === group.id ? { ...g, isDownloading: false } : g
      ));
    }
  };

  const handleRemoveDownload = async (group: GroupWithDownloadStatus) => {
    Alert.alert(
      'Remove Download',
      `Remove downloaded data for ${group.name}? You'll need to download it again to use offline.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          style: 'destructive',
          onPress: async () => {
            try {
              await OfflineStorage.removeDownloadedGroup(group.id);
              setGroups(prev => prev.map(g => 
                g.id === group.id ? { ...g, isDownloaded: false } : g
              ));
            } catch (error) {
              console.error('Failed to remove download:', error);
              Alert.alert('Error', 'Failed to remove download.');
            }
          }
        }
      ]
    );
  };

  const renderGroupItem = ({ item: group }: { item: GroupWithDownloadStatus }) => (
    <TouchableOpacity
      style={[
        styles.groupCard,
        { borderLeftColor: APP_CONFIG.HSK_COLORS[group.hsklevel as keyof typeof APP_CONFIG.HSK_COLORS] },
        !group.isDownloaded && !isOnline && styles.disabledCard
      ]}
      onPress={() => handleGroupPress(group)}
      disabled={!group.isDownloaded && !isOnline}
    >
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{group.name}</Text>
        <Text style={styles.groupDescription}>{group.description}</Text>
        
        <View style={styles.groupMeta}>
          <View style={styles.metaItem}>
            <MaterialIcons name="school" size={14} color="#6b7280" />
            <Text style={styles.metaText}>HSK {group.hsklevel}</Text>
          </View>
          
          <View style={styles.metaItem}>
            <MaterialIcons name="quiz" size={14} color="#6b7280" />
            <Text style={styles.metaText}>{group.wordCount || '~10'} words</Text>
          </View>
          
          {group.isDownloaded && (
            <View style={styles.metaItem}>
              <MaterialIcons name="offline-bolt" size={14} color="#10b981" />
              <Text style={[styles.metaText, { color: '#10b981' }]}>Downloaded</Text>
            </View>
          )}
        </View>

        {group.isDownloading && (
          <View style={styles.downloadProgress}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill,
                  { width: `${group.downloadProgress}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>{group.downloadProgress}%</Text>
          </View>
        )}
      </View>

      <View style={styles.groupActions}>
        {isOnline ? (
          group.isDownloaded ? (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleRemoveDownload(group)}
            >
              <MaterialIcons name="delete" size={20} color="#ef4444" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.actionButton, group.isDownloading && styles.disabledButton]}
              onPress={() => handleDownloadGroup(group)}
              disabled={group.isDownloading}
            >
              {group.isDownloading ? (
                <ActivityIndicator size="small" color="#1e40af" />
              ) : (
                <MaterialIcons name="download" size={20} color="#1e40af" />
              )}
            </TouchableOpacity>
          )
        ) : null}
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.playButton]}
          onPress={() => handleGroupPress(group)}
          disabled={!group.isDownloaded && !isOnline}
        >
          <MaterialIcons 
            name="play-arrow" 
            size={24} 
            color={(!group.isDownloaded && !isOnline) ? "#9ca3af" : "#1e40af"} 
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderHSKSection = (level: number) => {
    const levelGroups = groups.filter(g => g.hsklevel === level);
    if (levelGroups.length === 0) return null;

    return (
      <View key={level} style={styles.levelSection}>
        <View style={styles.levelHeader}>
          <View 
            style={[
              styles.levelBadge,
              { backgroundColor: APP_CONFIG.HSK_COLORS[level as keyof typeof APP_CONFIG.HSK_COLORS] }
            ]}
          >
            <Text style={styles.levelBadgeText}>HSK {level}</Text>
          </View>
          <Text style={styles.levelStats}>
            {levelGroups.filter(g => g.isDownloaded).length} of {levelGroups.length} downloaded
          </Text>
        </View>
        
        {levelGroups.map(group => (
          <View key={group.id}>
            {renderGroupItem({ item: group })}
          </View>
        ))}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#1e40af" />
        <Text style={styles.loadingText}>Loading HSK Groups...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HSK Vocabulary Groups</Text>
        <View style={styles.connectionStatus}>
          <MaterialIcons 
            name={isOnline ? "wifi" : "wifi-off"} 
            size={16} 
            color={isOnline ? "#10b981" : "#ef4444"} 
          />
          <Text style={[
            styles.connectionText,
            { color: isOnline ? "#10b981" : "#ef4444" }
          ]}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]} // HSK levels
        keyExtractor={(level) => `hsk-${level}`}
        renderItem={({ item: level }) => renderHSKSection(level)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.listContent}
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
    paddingTop: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  connectionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 12,
  },
  listContent: {
    padding: 20,
  },
  levelSection: {
    marginBottom: 24,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  levelBadgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  levelStats: {
    fontSize: 12,
    color: '#6b7280',
  },
  groupCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  disabledCard: {
    opacity: 0.6,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  groupDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  groupMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  downloadProgress: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  groupActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#eff6ff',
  },
  disabledButton: {
    opacity: 0.5,
  },
});