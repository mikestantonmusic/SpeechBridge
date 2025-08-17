import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import GroupListScreen from './src/screens/GroupListScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DownloadsScreen from './src/screens/DownloadsScreen';

const Stack = createStackNavigator();

// Register the service for background audio


export default function App() {
  useEffect(() => {
    // Setup background audio service when app starts

  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e40af',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Chinese Vocabulary Learning',
            headerShown: false // Home screen has its own header
          }}
        />
        <Stack.Screen 
          name="GroupList" 
          component={GroupListScreen} 
          options={{ 
            title: 'HSK Groups',
            headerShown: false // GroupList screen has its own header
          }}
        />
        <Stack.Screen 
          name="Vocabulary" 
          component={VocabularyScreen} 
          options={({ route }) => ({
            title: route.params?.groupName || 'Vocabulary',
            headerShown: true
          })}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ 
            title: 'Settings',
            headerShown: true
          }}
        />
        <Stack.Screen 
          name="Downloads" 
          component={DownloadsScreen} 
          options={{ 
            title: 'Downloads',
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}