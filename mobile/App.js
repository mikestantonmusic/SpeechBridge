import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import GroupListScreen from './src/screens/GroupListScreen';
import VocabularyScreen from './src/screens/VocabularyScreen';

const Stack = createStackNavigator();

export default function App() {
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
          options={{ title: 'Chinese Vocabulary Learning' }}
        />
        <Stack.Screen 
          name="GroupList" 
          component={GroupListScreen} 
          options={{ title: 'HSK Groups' }}
        />
        <Stack.Screen 
          name="Vocabulary" 
          component={VocabularyScreen} 
          options={{ title: 'Study Session' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}