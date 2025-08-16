import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PlaybackModeSelector({ playbackMode, onModeChange }) {
  const modes = [
    { key: 'loop', label: 'Loop', color: '#3b82f6', description: 'Repeat current group' },
    { key: 'sequential', label: 'Sequential', color: '#10b981', description: 'Auto-advance groups' },
    { key: 'review', label: 'Review', color: '#8b5cf6', description: 'Random learned groups' }
  ];

  const currentMode = modes.find(m => m.key === playbackMode) || modes[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playback Mode</Text>
      <View style={styles.modeContainer}>
        {modes.map((mode) => (
          <TouchableOpacity
            key={mode.key}
            style={[
              styles.modeButton,
              { backgroundColor: mode.color },
              playbackMode === mode.key && styles.selectedMode
            ]}
            onPress={() => onModeChange(mode.key)}
          >
            <Text style={styles.modeLabel}>{mode.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.description}>
        {currentMode.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedMode: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modeLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});