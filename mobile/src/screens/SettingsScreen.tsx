import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AppSettings, AudioSettings } from '../types';
import VocabularyService from '../services/VocabularyService';
import OfflineStorage from '../services/OfflineStorage';
import AudioManager from '../services/AudioManager';

export default function SettingsScreen() {
  const [appSettings, setAppSettings] = useState<AppSettings>({
    downloadOnWifiOnly: true,
    backgroundAudioEnabled: true,
    lockScreenControls: true,
    autoDownloadUpdates: false,
    maxStorageSize: 500
  });

  const [audioSettings, setAudioSettings] = useState<AudioSettings | null>(null);

  useEffect(() => {
    loadAudioSettings();
  }, []);

  const loadAudioSettings = async () => {
    try {
      const settings = await VocabularyService.getAudioSettings();
      setAudioSettings(settings);
    } catch (error) {
      console.error('Failed to load audio settings:', error);
    }
  };
  const [storageStats, setStorageStats] = useState({
    totalGroups: 0,
    totalWords: 0,
    estimatedSizeMB: 0,
    lastSyncDate: null as Date | null,
  });

  useEffect(() => {
    loadSettings();
    loadStorageStats();
  }, []);

  const loadSettings = async () => {
    try {
      const settings = await OfflineStorage.getAppSettings();
      setAppSettings(settings);
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const loadStorageStats = async () => {
    try {
      const stats = await OfflineStorage.getStorageStats();
      setStorageStats(stats);
    } catch (error) {
      console.error('Failed to load storage stats:', error);
    }
  };

  const saveAppSettings = async (newSettings: AppSettings) => {
    try {
      await OfflineStorage.saveAppSettings(newSettings);
      setAppSettings(newSettings);

      // Apply background audio setting
      //AudioManager.setBackgroundPlayback(newSettings.backgroundAudioEnabled);

    } catch (error) {
      console.error('Failed to save settings:', error);
      Alert.alert('Error', 'Failed to save settings');
    }
  };

  const handleClearAllData = () => {
    Alert.alert(
      'Clear All Data',
      'This will remove all downloaded vocabulary groups and settings. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: async () => {
            try {
              await OfflineStorage.clearAllData();
              await loadStorageStats();
              Alert.alert('Success', 'All data cleared successfully');
            } catch (error) {
              console.error('Failed to clear data:', error);
              Alert.alert('Error', 'Failed to clear data');
            }
          }
        }
      ]
    );
  };

  const renderSettingRow = (
    icon: string,
    title: string,
    subtitle: string,
    value: boolean,
    onToggle: (value: boolean) => void
  ) => (
    <View style={styles.settingRow}>
      <View style={styles.settingInfo}>
        <MaterialIcons name={icon as any} size={24} color="#1e40af" />
        <View style={styles.settingTexts}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#e5e7eb', true: '#93c5fd' }}
        thumbColor={value ? '#1e40af' : '#f3f4f6'}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Audio Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audio Settings</Text>
        
        {renderSettingRow(
          'headset',
          'Background Audio',
          'Continue playing when screen is locked',
          appSettings.backgroundAudioEnabled,
          (value) => saveAppSettings({ ...appSettings, backgroundAudioEnabled: value })
        )}

        {renderSettingRow(
          'media-bluetooth-on',
          'Lock Screen Controls',
          'Show media controls when screen is locked',
          appSettings.lockScreenControls,
          (value) => saveAppSettings({ ...appSettings, lockScreenControls: value })
        )}
      </View>

      {/* Download Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Download Settings</Text>
        
        {renderSettingRow(
          'wifi',
          'WiFi Only Downloads',
          'Download groups only when connected to WiFi',
          appSettings.downloadOnWifiOnly,
          (value) => saveAppSettings({ ...appSettings, downloadOnWifiOnly: value })
        )}

        {renderSettingRow(
          'system-update',
          'Auto Download Updates',
          'Automatically download group updates when available',
          appSettings.autoDownloadUpdates,
          (value) => saveAppSettings({ ...appSettings, autoDownloadUpdates: value })
        )}
      </View>

      {/* Storage Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage Information</Text>
        
        <View style={styles.storageInfo}>
          <View style={styles.storageRow}>
            <MaterialIcons name="folder" size={20} color="#6b7280" />
            <Text style={styles.storageLabel}>Downloaded Groups:</Text>
            <Text style={styles.storageValue}>{storageStats.totalGroups}</Text>
          </View>
          
          <View style={styles.storageRow}>
            <MaterialIcons name="quiz" size={20} color="#6b7280" />
            <Text style={styles.storageLabel}>Total Words:</Text>
            <Text style={styles.storageValue}>{storageStats.totalWords.toLocaleString()}</Text>
          </View>
          
          <View style={styles.storageRow}>
            <MaterialIcons name="storage" size={20} color="#6b7280" />
            <Text style={styles.storageLabel}>Storage Used:</Text>
            <Text style={styles.storageValue}>{storageStats.estimatedSizeMB} MB</Text>
          </View>
          
          <View style={styles.storageRow}>
            <MaterialIcons name="access-time" size={20} color="#6b7280" />
            <Text style={styles.storageLabel}>Last Sync:</Text>
            <Text style={styles.storageValue}>
              {storageStats.lastSyncDate 
                ? storageStats.lastSyncDate.toLocaleDateString()
                : 'Never'
              }
            </Text>
          </View>
        </View>
      </View>

      {/* Storage Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage Management</Text>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={loadStorageStats}
        >
          <MaterialIcons name="refresh" size={20} color="#1e40af" />
          <Text style={styles.actionButtonText}>Refresh Storage Info</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.dangerButton]}
          onPress={handleClearAllData}
        >
          <MaterialIcons name="delete-forever" size={20} color="#ef4444" />
          <Text style={[styles.actionButtonText, styles.dangerButtonText]}>Clear All Data</Text>
        </TouchableOpacity>
      </View>

      {/* Background Audio Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Background Audio Features</Text>
        
        <View style={styles.featureInfo}>
          <View style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={16} color="#10b981" />
            <Text style={styles.featureText}>Audio continues when screen is locked</Text>
          </View>
          
          <View style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={16} color="#10b981" />
            <Text style={styles.featureText}>Lock screen media controls</Text>
          </View>
          
          <View style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={16} color="#10b981" />
            <Text style={styles.featureText}>Audio loops within groups</Text>
          </View>
          
          <View style={styles.featureRow}>
            <MaterialIcons name="check-circle" size={16} color="#10b981" />
            <Text style={styles.featureText}>2-second pauses between words</Text>
          </View>
        </View>
      </View>

      {/* App Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Information</Text>
        <Text style={styles.appInfo}>
          Chinese Vocabulary Learning App{'\n'}
          Version 1.0.0{'\n'}
          HSK Levels 1-6 • 362 Groups • 3,610 Words
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
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTexts: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  storageInfo: {
    gap: 12,
  },
  storageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  storageLabel: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },
  storageValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e40af',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e40af',
  },
  dangerButton: {
    backgroundColor: '#fef2f2',
  },
  dangerButtonText: {
    color: '#ef4444',
  },
  featureInfo: {
    gap: 8,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
  },
  appInfo: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    textAlign: 'center',
  },
});