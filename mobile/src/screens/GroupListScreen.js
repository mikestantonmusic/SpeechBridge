import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { vocabularyAPI } from '../lib/VocabularyData';
import { audioManager } from '../lib/AudioManager';
import PlaybackModeSelector from '../components/PlaybackModeSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GroupListScreen({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playbackMode, setPlaybackMode] = useState('loop');

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    try {
      const vocabularyGroups = await vocabularyAPI.fetchGroups();
      setGroups(vocabularyGroups.map(group => ({
        ...group,
        name: group.title,
        level: group.hskLevel || 1,
        isDownloaded: true, // For demo, all groups are "downloaded"
        isLearned: group.isLearned === 1
      })));
      setLoading(false);
    } catch (error) {
      console.error('Error loading groups:', error);
      setLoading(false);
    }
  };

  const handleDownloadGroup = async (groupId) => {
    Alert.alert(
      'Download Group',
      'This will download the vocabulary group for offline use.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Download', 
          onPress: () => {
            // TODO: Implement group download
            Alert.alert('Coming Soon', 'Group download will be implemented in the next phase.');
          }
        }
      ]
    );
  };

  const handleStartGroup = (group) => {
    navigation.navigate('Vocabulary', { 
      groupId: group.id, 
      groupName: group.name 
    });
  };

  const toggleLearned = async (groupId) => {
    const updatedGroups = groups.map(group => 
      group.id === groupId 
        ? { ...group, isLearned: !group.isLearned }
        : group
    );
    setGroups(updatedGroups);
    
    try {
      await vocabularyAPI.updateGroupStatus(groupId, updatedGroups.find(g => g.id === groupId)?.isLearned);
    } catch (error) {
      console.error('Error saving group status:', error);
    }
  };

  const handlePlaybackModeChange = (mode) => {
    setPlaybackMode(mode);
    audioManager.setPlaybackMode(mode);
  };

  const getHSKLevelColor = (level) => {
    const colors = {
      1: '#ef4444', // red
      2: '#f97316', // orange  
      3: '#eab308', // yellow
      4: '#22c55e', // green
      5: '#3b82f6', // blue
      6: '#8b5cf6', // purple
    };
    return colors[level] || '#6b7280';
  };

  const renderGroup = ({ item }) => (
    <View style={styles.groupCard}>
      <View style={styles.groupHeader}>
        <View style={styles.groupTitleContainer}>
          <View style={[
            styles.levelBadge, 
            { backgroundColor: getHSKLevelColor(item.level) }
          ]}>
            <Text style={styles.levelText}>HSK {item.level}</Text>
          </View>
          <Text style={styles.groupName}>{item.name}</Text>
        </View>
        
        <TouchableOpacity
          onPress={() => toggleLearned(item.id)}
          style={styles.learnedButton}
        >
          <MaterialIcons
            name={item.isLearned ? "check-circle" : "radio-button-unchecked"}
            size={24}
            color={item.isLearned ? "#22c55e" : "#9ca3af"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.groupInfo}>
        <View style={styles.infoItem}>
          <MaterialIcons name="library-books" size={16} color="#6b7280" />
          <Text style={styles.infoText}>{item.wordCount} words</Text>
        </View>
        
        <View style={styles.infoItem}>
          <MaterialIcons 
            name={item.isDownloaded ? "offline-bolt" : "cloud-download"} 
            size={16} 
            color={item.isDownloaded ? "#22c55e" : "#f59e0b"} 
          />
          <Text style={[
            styles.infoText,
            { color: item.isDownloaded ? "#22c55e" : "#f59e0b" }
          ]}>
            {item.isDownloaded ? "Downloaded" : "Online Only"}
          </Text>
        </View>
      </View>

      <View style={styles.groupActions}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.primaryAction,
            !item.isDownloaded && styles.disabledAction
          ]}
          onPress={() => handleStartGroup(item)}
        >
          <MaterialIcons name="play-arrow" size={20} color="white" />
          <Text style={styles.actionText}>Study</Text>
        </TouchableOpacity>

        {!item.isDownloaded && (
          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryAction]}
            onPress={() => handleDownloadGroup(item.id)}
          >
            <MaterialIcons name="download" size={20} color="#1e40af" />
            <Text style={styles.secondaryActionText}>Download</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading HSK Groups...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {groups.length} HSK Groups Available
        </Text>
        <Text style={styles.headerSubtext}>
          Choose your learning mode and start practicing
        </Text>
      </View>

      <PlaybackModeSelector 
        playbackMode={playbackMode}
        onModeChange={handlePlaybackModeChange}
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderGroup}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  headerSubtext: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  listContainer: {
    padding: 16,
  },
  groupCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  groupTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  groupName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  learnedButton: {
    padding: 4,
  },
  groupInfo: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
  },
  groupActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 4,
    flex: 1,
    justifyContent: 'center',
  },
  primaryAction: {
    backgroundColor: '#1e40af',
  },
  disabledAction: {
    backgroundColor: '#9ca3af',
  },
  secondaryAction: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#1e40af',
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryActionText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
  },
});