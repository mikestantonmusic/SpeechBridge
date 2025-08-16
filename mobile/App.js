import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState('home');

  const HomeScreen = () => (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="school" size={48} color="#1e40af" />
        <Text style={styles.headerTitle}>Chinese Vocabulary Learning</Text>
        <Text style={styles.headerSubtitle}>HSK Levels 1-6 • Audio Practice</Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="library-books" size={32} color="#3b82f6" />
          <Text style={styles.statNumber}>3,610</Text>
          <Text style={styles.statLabel}>Total Words</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="folder" size={32} color="#10b981" />
          <Text style={styles.statNumber}>362</Text>
          <Text style={styles.statLabel}>HSK Groups</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="download" size={32} color="#f59e0b" />
          <Text style={styles.statNumber}>Ready</Text>
          <Text style={styles.statLabel}>For Testing</Text>
        </View>
      </View>

      {/* Main Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => setCurrentScreen('groups')}
        >
          <MaterialIcons name="play-arrow" size={32} color="white" />
          <Text style={styles.primaryButtonText}>View HSK Groups</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <MaterialIcons name="info" size={24} color="#1e40af" />
          <Text style={styles.secondaryButtonText}>Mobile App Demo</Text>
        </TouchableOpacity>
      </View>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Mobile Features (Coming Soon)</Text>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="headset" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Background audio with screen locked</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="loop" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Audio loops within groups</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="offline-bolt" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Offline practice downloads</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="speed" size={20} color="#6b7280" />
          <Text style={styles.featureText}>2-second pauses between words</Text>
        </View>
      </View>
    </ScrollView>
  );

  const GroupsScreen = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('home')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#1e40af" />
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HSK Groups</Text>
      </View>

      <ScrollView style={styles.groupsList}>
        {[1, 2, 3, 4, 5, 6].map(level => (
          <View key={level} style={styles.levelSection}>
            <Text style={styles.levelTitle}>HSK Level {level}</Text>
            {[1, 2, 3].map(group => (
              <TouchableOpacity 
                key={group} 
                style={[styles.groupCard, { borderLeftColor: getHSKColor(level) }]}
                onPress={() => setCurrentScreen('vocabulary')}
              >
                <View style={styles.groupInfo}>
                  <Text style={styles.groupName}>HSK {level}-{group}</Text>
                  <Text style={styles.groupDescription}>
                    {level <= 2 ? 'Basic vocabulary' : 
                     level <= 4 ? 'Intermediate vocabulary' : 'Advanced vocabulary'}
                  </Text>
                </View>
                <View style={styles.groupStats}>
                  <Text style={styles.wordCount}>~10 words</Text>
                  <MaterialIcons name="play-arrow" size={24} color="#1e40af" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const VocabularyScreen = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('groups')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#1e40af" />
          <Text style={styles.backButtonText}>Back to Groups</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HSK 1-1 Sample</Text>
      </View>

      {/* Word Display */}
      <View style={styles.wordCard}>
        <Text style={styles.englishWord}>father</Text>
        <Text style={styles.chineseWord}>爸爸</Text>
        <Text style={styles.pinyin}>(bàba)</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '30%' }]} />
        </View>
        <Text style={styles.progressText}>3 / 10 words</Text>
      </View>

      {/* Audio Controls */}
      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.controlButton}>
          <MaterialIcons name="skip-previous" size={32} color="#1e40af" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.controlButton, styles.playButton]}>
          <MaterialIcons name="play-arrow" size={48} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <MaterialIcons name="skip-next" size={32} color="#1e40af" />
        </TouchableOpacity>
      </View>

      <View style={styles.demoNotice}>
        <MaterialIcons name="info" size={20} color="#f59e0b" />
        <Text style={styles.demoText}>
          Demo mode - Audio features will be added in the next phase
        </Text>
      </View>
    </View>
  );

  const getHSKColor = (level) => {
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

  return (
    <>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'groups' && <GroupsScreen />}
      {currentScreen === 'vocabulary' && <VocabularyScreen />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
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
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 16,
    gap: 8,
  },
  backButtonText: {
    color: '#1e40af',
    fontSize: 16,
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
    minWidth: 80,
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
  actionContainer: {
    padding: 20,
    gap: 12,
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
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1e40af',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#1e40af',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresContainer: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
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
  // Groups screen
  groupsList: {
    flex: 1,
    padding: 20,
  },
  levelSection: {
    marginBottom: 24,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
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
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  groupDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  groupStats: {
    alignItems: 'flex-end',
  },
  wordCount: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  // Vocabulary screen
  wordCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
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
  },
  progressContainer: {
    paddingHorizontal: 20,
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
    marginVertical: 20,
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
  demoNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    margin: 20,
    padding: 12,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
  },
  demoText: {
    fontSize: 14,
    color: '#92400e',
    textAlign: 'center',
    flex: 1,
  },
});