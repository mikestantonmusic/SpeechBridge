import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [downloadedGroups, setDownloadedGroups] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [offlineMode, setOfflineMode] = useState(true);

  useEffect(() => {
    loadAppData();
  }, []);

  const loadAppData = async () => {
    try {
      // This will be populated when we port the vocabulary data
      const groups = await AsyncStorage.getItem('@vocabulary_groups');
      if (groups) {
        const parsedGroups = JSON.parse(groups);
        setDownloadedGroups(parsedGroups.length);
        
        // Count total words across all groups
        const wordCount = parsedGroups.reduce((total, group) => total + (group.words?.length || 0), 0);
        setTotalWords(wordCount);
      }
    } catch (error) {
      console.error('Error loading app data:', error);
    }
  };

  const handleStartLearning = () => {
    if (downloadedGroups === 0) {
      Alert.alert(
        'No Content Available',
        'Please download HSK vocabulary groups first to start learning.',
        [{ text: 'OK' }]
      );
      return;
    }
    navigation.navigate('GroupList');
  };

  const handleDownloadContent = async () => {
    Alert.alert(
      'Download HSK Content',
      'This will download all 362 HSK vocabulary groups (3,610 words) for offline use. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Download', 
          onPress: () => {
            // TODO: Implement vocabulary download from web app data
            Alert.alert('Coming Soon', 'Download functionality will be implemented in the next step.');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chinese Vocabulary Learning</Text>
        <Text style={styles.subtitle}>HSK Levels 1-6 • Authentic Vocabulary</Text>
      </View>

      {/* App Status Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="storage" size={24} color="#1e40af" />
          <Text style={styles.cardTitle}>App Status</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{downloadedGroups}</Text>
            <Text style={styles.statLabel}>Groups Downloaded</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{totalWords.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Words Available</Text>
          </View>
          <View style={styles.stat}>
            <MaterialIcons 
              name={offlineMode ? "offline-bolt" : "wifi"} 
              size={24} 
              color={offlineMode ? "#16a34a" : "#dc2626"} 
            />
            <Text style={styles.statLabel}>
              {offlineMode ? "Offline Ready" : "Online"}
            </Text>
          </View>
        </View>
      </View>

      {/* Features Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="stars" size={24} color="#1e40af" />
          <Text style={styles.cardTitle}>Mobile Features</Text>
        </View>
        <View style={styles.featuresList}>
          <View style={styles.feature}>
            <MaterialIcons name="download" size={20} color="#16a34a" />
            <Text style={styles.featureText}>Offline Group Downloads</Text>
          </View>
          <View style={styles.feature}>
            <MaterialIcons name="headset" size={20} color="#16a34a" />
            <Text style={styles.featureText}>Background Audio Playback</Text>
          </View>
          <View style={styles.feature}>
            <MaterialIcons name="loop" size={20} color="#16a34a" />
            <Text style={styles.featureText}>Group Looping (Screen Locked)</Text>
          </View>
          <View style={styles.feature}>
            <MaterialIcons name="voice-chat" size={20} color="#16a34a" />
            <Text style={styles.featureText}>Microsoft Xiaoxiao Voice</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.primaryButton,
            downloadedGroups === 0 && styles.disabledButton
          ]} 
          onPress={handleStartLearning}
        >
          <MaterialIcons name="school" size={24} color="white" />
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={handleDownloadContent}
        >
          <MaterialIcons name="cloud-download" size={24} color="#1e40af" />
          <Text style={styles.secondaryButtonText}>Download HSK Content</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Information */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Your Mobile Vocabulary Journey</Text>
        <Text style={styles.infoText}>
          This app contains authentic HSK vocabulary across all 6 levels, with high-quality pronunciation 
          using Microsoft Xiaoxiao voice. Download groups for offline practice and enjoy continuous 
          learning with background audio that works even when your screen is locked.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1e40af',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#93c5fd',
    marginTop: 5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#1f2937',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 5,
    textAlign: 'center',
  },
  featuresList: {
    gap: 12,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#374151',
  },
  buttonContainer: {
    padding: 20,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#1e40af',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1e40af',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#1e40af',
    fontSize: 18,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#eff6ff',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
});