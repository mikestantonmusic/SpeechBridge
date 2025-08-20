import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import VocabularyService from '../services/VocabularyService';
import OfflineStorage from '../services/OfflineStorage';

type RootStackParamList = {
  Home: undefined;
  GroupList: undefined;
  Vocabulary: { groupId: string; groupName: string };
  Settings: undefined;
  Downloads: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface AppStats {
  totalGroups: number;
  totalWords: number;
  downloadedGroups: number;
  estimatedSizeMB: number;
  isOnline: boolean;
}

export default function HomeScreen({ navigation }: Props) {
  const [stats, setStats] = useState<AppStats>({
    totalGroups: 0,
    totalWords: 0,
    downloadedGroups: 0,
    estimatedSizeMB: 0,
    isOnline: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppStats();
  }, []);

  const loadAppStats = async () => {
    try {
      setLoading(true);

      // Get vocabulary stats from embedded service
      const vocabStats = await VocabularyService.getStats();
      
      // Get offline storage stats
      const storageStats = await OfflineStorage.getStorageStats();

      setStats({
        totalGroups: vocabStats.totalGroups,
        totalWords: vocabStats.totalWords,
        downloadedGroups: vocabStats.downloadedGroups,
        estimatedSizeMB: storageStats.estimatedSizeMB,
        isOnline: true // Always online with embedded data
      });

    } catch (error) {
      console.error('Failed to load app stats:', error);
      Alert.alert(
        'Error',
        'Failed to load app statistics. Please check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleStartLearning = () => {
    navigation.navigate('GroupList');
  };

  const handleDownloads = () => {
    navigation.navigate('Downloads');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <MaterialIcons name="school" size={48} color="#1e40af" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="school" size={48} color="#1e40af" />
        <Text style={styles.headerTitle}>Chinese Vocabulary Learning</Text>
        <Text style={styles.headerSubtitle}>HSK Levels 1-6 • Mobile App</Text>
        
        {/* Connection Status */}
        <View style={styles.connectionStatus}>
          <MaterialIcons 
            name={stats.isOnline ? "wifi" : "wifi-off"} 
            size={16} 
            color={stats.isOnline ? "#10b981" : "#ef4444"} 
          />
          <Text style={[
            styles.connectionText,
            { color: stats.isOnline ? "#10b981" : "#ef4444" }
          ]}>
            {stats.isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="library-books" size={32} color="#3b82f6" />
          <Text style={styles.statNumber}>{stats.totalWords.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Total Words</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="folder" size={32} color="#10b981" />
          <Text style={styles.statNumber}>{stats.totalGroups}</Text>
          <Text style={styles.statLabel}>HSK Groups</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="download" size={32} color="#f59e0b" />
          <Text style={styles.statNumber}>{stats.downloadedGroups}</Text>
          <Text style={styles.statLabel}>Downloaded</Text>
        </View>
      </View>

      {/* Storage Info */}
      {stats.downloadedGroups > 0 && (
        <View style={styles.storageInfo}>
          <MaterialIcons name="storage" size={20} color="#6b7280" />
          <Text style={styles.storageText}>
            Using {stats.estimatedSizeMB} MB for offline storage
          </Text>
        </View>
      )}

      {/* Main Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleStartLearning}
        >
          <MaterialIcons name="play-arrow" size={32} color="white" />
          <Text style={styles.primaryButtonText}>Start Learning</Text>
        </TouchableOpacity>

        <View style={styles.secondaryActions}>
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleDownloads}
          >
            <MaterialIcons name="download" size={24} color="#1e40af" />
            <Text style={styles.secondaryButtonText}>Manage Downloads</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={handleSettings}
          >
            <MaterialIcons name="settings" size={24} color="#1e40af" />
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Mobile Features</Text>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="headset" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Background audio with screen locked</Text>
          <MaterialIcons name="check-circle" size={16} color="#10b981" />
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="loop" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Audio loops within groups</Text>
          <MaterialIcons name="check-circle" size={16} color="#10b981" />
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="offline-bolt" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Offline practice downloads</Text>
          <MaterialIcons name="check-circle" size={16} color="#10b981" />
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="timer" size={20} color="#6b7280" />
          <Text style={styles.featureText}>2-second pauses between words</Text>
          <MaterialIcons name="check-circle" size={16} color="#10b981" />
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Text style={styles.quickActionsTitle}>Quick Actions</Text>
        
        <TouchableOpacity 
          style={styles.quickActionItem}
          onPress={() => navigation.navigate('GroupList')}
        >
          <MaterialIcons name="school" size={24} color="#1e40af" />
          <Text style={styles.quickActionText}>Browse HSK Groups</Text>
          <MaterialIcons name="chevron-right" size={20} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.quickActionItem}
          onPress={loadAppStats}
        >
          <MaterialIcons name="refresh" size={24} color="#1e40af" />
          <Text style={styles.quickActionText}>Refresh Data</Text>
          <MaterialIcons name="chevron-right" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 24,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginTop: 12,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
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
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    textAlign: 'center',
  },
  storageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 6,
  },
  storageText: {
    fontSize: 14,
    color: '#6b7280',
  },
  actionContainer: {
    padding: 20,
  },
  primaryButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryActions: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1e40af',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '600',
  },
  featuresContainer: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#4b5563',
  },
  quickActions: {
    margin: 20,
    marginTop: 0,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  quickActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  quickActionText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
});