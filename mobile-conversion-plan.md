# Chinese Vocabulary Mobile App Conversion Plan

## User Requirements
1. **Offline Downloads**: Download HSK groups for offline practice
2. **Background Audio**: Continue audio playback with locked screen
3. **Group Looping**: Loop current group when locked, don't auto-advance
4. **3,610 HSK Words**: Maintain all existing vocabulary across levels 1-6

## Conversion Strategy: Phase-by-Phase Approach

### Phase 1: Mobile Project Setup ⭐ (CURRENT)
- [ ] Create new Expo project in Replit
- [ ] Set up basic React Native structure
- [ ] Install required mobile dependencies
- [ ] Test basic app launch with Expo Go

### Phase 2: Port Core Functionality 
- [ ] Port HSK vocabulary data (3,610 words)
- [ ] Recreate vocabulary group UI for mobile
- [ ] Implement basic audio playback (no background yet)
- [ ] Add group selection and word display

### Phase 3: Add Offline Capabilities
- [ ] Install AsyncStorage for offline storage
- [ ] Implement group download functionality
- [ ] Cache HSK groups locally on device
- [ ] Add offline/online status indicators

### Phase 4: Background Audio Implementation
- [ ] Install react-native-track-player
- [ ] Configure iOS background audio capabilities
- [ ] Configure Android foreground service
- [ ] Implement lock screen controls

### Phase 5: Group Looping Logic
- [ ] Add group repeat mode when screen locked
- [ ] Prevent auto-advance between groups
- [ ] Add manual group progression controls
- [ ] Test locked screen behavior

### Phase 6: Testing & Deployment
- [ ] Create EAS development build
- [ ] Test on real devices (iOS/Android)
- [ ] Verify offline functionality
- [ ] Test background audio with locked screen
- [ ] Submit to app stores (optional)

## Technical Stack

### Mobile Framework
- **Expo/React Native**: For cross-platform development
- **EAS Build**: For native functionality and app store deployment

### Key Libraries
- **AsyncStorage**: Offline vocabulary storage
- **react-native-track-player**: Background audio with lock screen controls
- **expo-file-system**: File management for offline groups
- **react-native-vector-icons**: UI icons

### Audio Requirements
- **iOS**: Background audio capability, AVAudioSession configuration
- **Android**: Foreground service, MediaSession integration
- **Voice**: Microsoft Xiaoxiao TTS (will need research for mobile implementation)

## Current Web App Assets to Port
- ✅ 3,610 HSK vocabulary words across 6 levels
- ✅ 362 vocabulary groups with proper HSK ordering  
- ✅ Audio settings (pause duration, voice speed, language order)
- ✅ Progress tracking ("learned" vs "not learned" groups)
- ✅ TTS integration with Microsoft Xiaoxiao voice

## Next Steps
1. Create Expo project template
2. Set up basic navigation and UI
3. Port vocabulary data structure
4. Test basic functionality before adding advanced features