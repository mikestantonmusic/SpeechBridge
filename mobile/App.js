import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}