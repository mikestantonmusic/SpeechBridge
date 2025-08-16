import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function VocabularyScreen({ route, navigation }) {
  const { groupId, groupName } = route.params;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackMode, setPlaybackMode] = useState('English → Chinese → Chinese');
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Load vocabulary words for this group
    loadGroupWords();
    
    // Set up the header with group name
    navigation.setOptions({ title: groupName });
  }, [groupId, groupName, navigation]);

  const loadGroupWords = async () => {
    // TODO: Load actual words from AsyncStorage
    // For now, using placeholder data
    const placeholderWords = [
      {
        id: 1,
        english: 'father',
        chinese: '爸爸',
        pinyin: 'bàba'
      },
      {
        id: 2,
        english: 'mother', 
        chinese: '妈妈',
        pinyin: 'māma'
      },
      {
        id: 3,
        english: 'son',
        chinese: '儿子', 
        pinyin: 'érzi'
      }
    ];
    setWords(placeholderWords);
  };

  const handlePlayPause = () => {
    if (words.length === 0) return;
    
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      Alert.alert(
        'Audio Playback',
        'Background audio playback will be implemented with react-native-track-player in the next phase.'
      );
    }
  };

  const handlePreviousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const togglePlaybackMode = () => {
    const modes = [
      'English → Chinese → Chinese',
      'Chinese → Chinese → English', 
      'Chinese → English → Chinese'
    ];
    const currentIndex = modes.indexOf(playbackMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setPlaybackMode(modes[nextIndex]);
  };

  const currentWord = words[currentWordIndex];

  if (words.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading vocabulary...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill,
              { width: `${((currentWordIndex + 1) / words.length) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {currentWordIndex + 1} / {words.length}
        </Text>
      </View>

      {/* Word Display */}
      <View style={styles.wordCard}>
        <Text style={styles.englishWord}>{currentWord.english}</Text>
        <Text style={styles.chineseWord}>{currentWord.chinese}</Text>
        <Text style={styles.pinyin}>({currentWord.pinyin})</Text>
      </View>

      {/* Audio Controls */}
      <View style={styles.audioControls}>
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handlePreviousWord}
          disabled={currentWordIndex === 0}
        >
          <MaterialIcons 
            name="skip-previous" 
            size={32} 
            color={currentWordIndex === 0 ? "#9ca3af" : "#1e40af"} 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.controlButton, styles.playButton]}
          onPress={handlePlayPause}
        >
          <MaterialIcons 
            name={isPlaying ? "pause" : "play-arrow"} 
            size={48} 
            color="white" 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handleNextWord}
          disabled={currentWordIndex === words.length - 1}
        >
          <MaterialIcons 
            name="skip-next" 
            size={32} 
            color={currentWordIndex === words.length - 1 ? "#9ca3af" : "#1e40af"} 
          />
        </TouchableOpacity>
      </View>

      {/* Playback Mode */}
      <TouchableOpacity 
        style={styles.modeButton}
        onPress={togglePlaybackMode}
      >
        <MaterialIcons name="repeat" size={20} color="#1e40af" />
        <Text style={styles.modeText}>{playbackMode}</Text>
      </TouchableOpacity>

      {/* Loop Mode Info */}
      <View style={styles.infoCard}>
        <MaterialIcons name="info" size={20} color="#3b82f6" />
        <Text style={styles.infoText}>
          When screen is locked, audio will loop within this group only. 
          Manually navigate to advance to the next group.
        </Text>
      </View>

      {/* Settings Placeholder */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Audio Settings</Text>
        <Text style={styles.settingsNote}>
          Voice speed, pause duration, and other audio settings will be available in the next phase.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
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
  progressContainer: {
    marginBottom: 30,
  },
  progressBar: {
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
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    color: '#6b7280',
  },
  wordCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  englishWord: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  chineseWord: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  pinyin: {
    fontSize: 18,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  audioControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
  },
  controlButton: {
    padding: 12,
  },
  playButton: {
    backgroundColor: '#1e40af',
    borderRadius: 40,
    padding: 20,
  },
  modeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  modeText: {
    fontSize: 14,
    color: '#1e40af',
    fontWeight: '600',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
  settingsContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  settingsNote: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});