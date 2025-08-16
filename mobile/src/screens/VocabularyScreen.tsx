import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { VocabularyWord, AudioState, PlaybackMode } from '../types';
import VocabularyAPI from '../services/VocabularyAPI';
import OfflineStorage from '../services/OfflineStorage';
import AudioManager from '../services/AudioManager';
import { APP_CONFIG } from '../utils/constants';

type RootStackParamList = {
  Home: undefined;
  GroupList: undefined;
  Vocabulary: { groupId: string; groupName: string; hsklevel: number };
  Settings: undefined;
  Downloads: undefined;
};

type VocabularyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Vocabulary'>;
type VocabularyScreenRouteProp = RouteProp<RootStackParamList, 'Vocabulary'>;

interface Props {
  navigation: VocabularyScreenNavigationProp;
  route: VocabularyScreenRouteProp;
}

export default function VocabularyScreen({ navigation, route }: Props) {
  const { groupId, groupName, hsklevel } = route.params;
  
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentGroupId: null,
    currentWordIndex: 0,
    currentPhase: "idle",
    playbackMode: "loop",
    volume: 1.0,
    isBuffering: false
  });
  const [isOnline, setIsOnline] = useState(false);
  const [currentWord, setCurrentWord] = useState<VocabularyWord | null>(null);

  useEffect(() => {
    loadWords();
    setupAudioListener();
    
    // Set navigation header
    navigation.setOptions({
      title: groupName,
      headerShown: true,
    });

    return () => {
      // Cleanup audio when leaving screen
      AudioManager.stopAudio();
    };
  }, [groupId, groupName]);

  useEffect(() => {
    // Update current word when audio state changes
    if (words.length > 0 && audioState.currentWordIndex < words.length) {
      setCurrentWord(words[audioState.currentWordIndex]);
    }
  }, [audioState.currentWordIndex, words]);

  const setupAudioListener = () => {
    const unsubscribe = AudioManager.subscribe((state: AudioState) => {
      setAudioState(state);
    });

    return unsubscribe;
  };

  const loadWords = async () => {
    try {
      setLoading(true);

      // Check if online
      const online = await VocabularyAPI.checkConnection();
      setIsOnline(online);

      let vocabularyWords: VocabularyWord[] = [];

      // Try to load from offline storage first
      const offlineWords = await OfflineStorage.getGroupWords(groupId);
      
      if (offlineWords.length > 0) {
        vocabularyWords = offlineWords;
      } else if (online) {
        // Load from API if not available offline
        vocabularyWords = await VocabularyAPI.getGroupWords(groupId);
      } else {
        throw new Error('Group not available offline and no internet connection');
      }

      if (vocabularyWords.length === 0) {
        throw new Error('No words found for this group');
      }

      // Sort by order
      vocabularyWords.sort((a, b) => a.order - b.order);
      setWords(vocabularyWords);
      setCurrentWord(vocabularyWords[0]);

      // Get audio settings and initialize AudioManager
      try {
        const audioSettings = await VocabularyAPI.getAudioSettings();
        AudioManager.setAudioSettings(audioSettings);
      } catch (error) {
        console.log('Using default audio settings');
      }

    } catch (error) {
      console.error('Failed to load words:', error);
      Alert.alert(
        'Error',
        'Failed to load vocabulary words. Please check your connection or download this group first.',
        [
          { text: 'Go Back', onPress: () => navigation.goBack() }
        ]
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePlayPause = async () => {
    try {
      if (audioState.isPlaying) {
        await AudioManager.stopAudio();
      } else {
        await AudioManager.startGroupPlayback(groupId);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
      Alert.alert('Audio Error', 'Failed to play audio. Please try again.');
    }
  };

  const handlePrevious = async () => {
    try {
      await AudioManager.skipToPrevious();
    } catch (error) {
      console.error('Skip previous error:', error);
    }
  };

  const handleNext = async () => {
    try {
      await AudioManager.skipToNext();
    } catch (error) {
      console.error('Skip next error:', error);
    }
  };

  const handlePlaybackModeChange = () => {
    const modes: PlaybackMode[] = ['loop', 'sequential', 'review'];
    const currentIndex = modes.indexOf(audioState.playbackMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    AudioManager.setPlaybackMode(nextMode);
  };

  const getPlaybackModeIcon = () => {
    switch (audioState.playbackMode) {
      case 'loop':
        return 'repeat';
      case 'sequential':
        return 'playlist-play';
      case 'review':
        return 'quiz';
      default:
        return 'repeat';
    }
  };

  const getPlaybackModeLabel = () => {
    switch (audioState.playbackMode) {
      case 'loop':
        return 'Loop Group';
      case 'sequential':
        return 'Sequential';
      case 'review':
        return 'Review Mode';
      default:
        return 'Loop Group';
    }
  };

  const getPhaseLabel = () => {
    switch (audioState.currentPhase) {
      case 'english':
        return 'Speaking English';
      case 'chinese':
        return 'Speaking Chinese';
      case 'pause':
        return 'Pausing...';
      default:
        return 'Ready';
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#1e40af" />
        <Text style={styles.loadingText}>Loading vocabulary...</Text>
      </View>
    );
  }

  if (!currentWord) {
    return (
      <View style={[styles.container, styles.centered]}>
        <MaterialIcons name="error" size={48} color="#ef4444" />
        <Text style={styles.errorText}>No words available</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={loadWords}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Group Info */}
      <View style={styles.groupInfo}>
        <View 
          style={[
            styles.levelBadge,
            { backgroundColor: APP_CONFIG.HSK_COLORS[hsklevel as keyof typeof APP_CONFIG.HSK_COLORS] }
          ]}
        >
          <Text style={styles.levelBadgeText}>HSK {hsklevel}</Text>
        </View>
        
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

      {/* Word Display */}
      <View style={styles.wordCard}>
        <Text style={styles.englishWord}>{currentWord.english}</Text>
        <Text style={styles.chineseWord}>{currentWord.chinese}</Text>
        <Text style={styles.pinyin}>({currentWord.pinyin})</Text>
        
        {/* Audio Phase Indicator */}
        <View style={styles.phaseIndicator}>
          <MaterialIcons 
            name={audioState.isBuffering ? "hourglass-empty" : "volume-up"} 
            size={16} 
            color="#6b7280" 
          />
          <Text style={styles.phaseText}>{getPhaseLabel()}</Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill,
              { width: `${((audioState.currentWordIndex + 1) / words.length) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {audioState.currentWordIndex + 1} / {words.length} words
        </Text>
      </View>

      {/* Audio Controls */}
      <View style={styles.audioControls}>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handlePrevious}
        >
          <MaterialIcons name="skip-previous" size={32} color="#1e40af" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.controlButton, styles.playButton]}
          onPress={handlePlayPause}
          disabled={audioState.isBuffering}
        >
          {audioState.isBuffering ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <MaterialIcons 
              name={audioState.isPlaying ? "pause" : "play-arrow"} 
              size={48} 
              color="white" 
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handleNext}
        >
          <MaterialIcons name="skip-next" size={32} color="#1e40af" />
        </TouchableOpacity>
      </View>

      {/* Playback Mode */}
      <View style={styles.playbackModeContainer}>
        <TouchableOpacity
          style={styles.playbackModeButton}
          onPress={handlePlaybackModeChange}
        >
          <MaterialIcons 
            name={getPlaybackModeIcon()} 
            size={20} 
            color="#1e40af" 
          />
          <Text style={styles.playbackModeText}>{getPlaybackModeLabel()}</Text>
        </TouchableOpacity>
        
        <Text style={styles.playbackModeDescription}>
          {audioState.playbackMode === 'loop' && 'Audio will repeat this group continuously'}
          {audioState.playbackMode === 'sequential' && 'Audio will move to next group after completion'}
          {audioState.playbackMode === 'review' && 'Audio will play only learned groups'}
        </Text>
      </View>

      {/* Background Audio Notice */}
      <View style={styles.backgroundAudioNotice}>
        <MaterialIcons name="info" size={20} color="#3b82f6" />
        <Text style={styles.backgroundAudioText}>
          Audio will continue playing when you lock your screen or switch to other apps
        </Text>
      </View>

      {/* Word List Preview */}
      <View style={styles.wordListContainer}>
        <Text style={styles.wordListTitle}>All Words in This Group</Text>
        {words.slice(0, 5).map((word, index) => (
          <View 
            key={word.id} 
            style={[
              styles.wordListItem,
              index === audioState.currentWordIndex && styles.currentWordItem
            ]}
          >
            <Text style={styles.wordListEnglish}>{word.english}</Text>
            <Text style={styles.wordListChinese}>{word.chinese}</Text>
          </View>
        ))}
        {words.length > 5 && (
          <Text style={styles.wordListMore}>
            ... and {words.length - 5} more words
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 20,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
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
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    marginTop: 12,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  wordCard: {
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  englishWord: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  chineseWord: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  pinyin: {
    fontSize: 18,
    color: '#6b7280',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  phaseIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
  },
  phaseText: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1e40af',
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6b7280',
  },
  audioControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
  },
  controlButton: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playButton: {
    backgroundColor: '#1e40af',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  playbackModeContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  playbackModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  playbackModeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af',
  },
  playbackModeDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  backgroundAudioNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    marginBottom: 20,
  },
  backgroundAudioText: {
    flex: 1,
    fontSize: 14,
    color: '#1e40af',
  },
  wordListContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  wordListTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  wordListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
  currentWordItem: {
    backgroundColor: '#eff6ff',
  },
  wordListEnglish: {
    fontSize: 14,
    color: '#374151',
  },
  wordListChinese: {
    fontSize: 14,
    color: '#1e40af',
    fontWeight: '500',
  },
  wordListMore: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
});