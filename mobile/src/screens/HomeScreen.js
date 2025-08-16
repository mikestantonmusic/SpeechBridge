import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const appStats = {
    totalGroups: 362,
    totalWords: 3610,
    hskLevels: 6,
    downloadedGroups: 30 // This will be dynamic later
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chinese Vocabulary Learning</Text>
        <Text style={styles.headerSubtitle}>HSK Levels 1-6 • Audio Practice</Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="library-books" size={32} color="#3b82f6" />
          <Text style={styles.statNumber}>{appStats.totalWords}</Text>
          <Text style={styles.statLabel}>Total Words</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="folder" size={32} color="#10b981" />
          <Text style={styles.statNumber}>{appStats.totalGroups}</Text>
          <Text style={styles.statLabel}>HSK Groups</Text>
        </View>
        
        <View style={styles.statCard}>
          <MaterialIcons name="download" size={32} color="#f59e0b" />
          <Text style={styles.statNumber}>{appStats.downloadedGroups}</Text>
          <Text style={styles.statLabel}>Downloaded</Text>
        </View>
      </View>

      {/* Main Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('GroupList')}
        >
          <MaterialIcons name="play-arrow" size={32} color="white" />
          <Text style={styles.primaryButtonText}>Start Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <MaterialIcons name="download" size={24} color="#1e40af" />
          <Text style={styles.secondaryButtonText}>Download HSK Content</Text>
        </TouchableOpacity>
      </View>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Mobile Features</Text>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="headset" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Background audio continues when screen is locked</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="loop" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Audio loops within groups (doesn't auto-advance)</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="offline-bolt" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Offline practice with downloaded groups</Text>
        </View>
        
        <View style={styles.featureItem}>
          <MaterialIcons name="speed" size={20} color="#6b7280" />
          <Text style={styles.featureText}>Customizable audio speed and timing</Text>
        </View>
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
    padding: 24,
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
    lineHeight: 20,
  },
});