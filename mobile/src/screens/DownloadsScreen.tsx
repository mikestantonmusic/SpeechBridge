import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DownloadsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download Manager</Text>
      <Text style={styles.subtitle}>Coming in Phase 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
});