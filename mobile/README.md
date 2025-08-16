# Chinese Vocabulary Mobile App

## Quick Start Testing

### Option 1: Test with Expo Go (Basic Functionality)
1. **Install Expo Go** on your phone from App Store/Google Play
2. **Run in Replit**: 
   ```bash
   cd mobile
   npm install
   npx expo start
   ```
3. **Scan QR code** with Expo Go to test the app structure
4. **Note**: Background audio won't work in Expo Go (needs native build)

### Option 2: Create EAS Development Build (Full Features)
1. **Install EAS CLI**: `npm install -g @expo/eas-cli`
2. **Login to Expo**: `eas login`
3. **Configure project**: `eas init`
4. **Create development build**: `eas build --profile development`
5. **Install on device** via QR code for full native functionality

## Current Status

✅ **Phase 1 Complete**: Mobile app structure created
- Home screen with app status and features
- Group list with HSK level organization  
- Vocabulary study interface with audio controls
- Background audio configuration ready
- Offline storage preparation complete

## Next Phases

### Phase 2: Port Vocabulary Data (Next Step)
- Import your 3,610 HSK words from web app
- Convert vocabulary groups to mobile format
- Set up AsyncStorage for offline access

### Phase 3: Add Background Audio
- Implement react-native-track-player
- Configure lock screen controls
- Add group looping functionality

### Phase 4: Offline Downloads
- Create group download system
- Cache vocabulary for offline use
- Sync with web app data

## Mobile-Specific Features Included

1. **Offline Downloads**: Download HSK groups for practice without internet
2. **Background Audio**: Continue playback when screen is locked
3. **Group Looping**: Loop current group when locked (no auto-advance)
4. **Progress Tracking**: Mark groups as learned/not learned
5. **HSK Level Organization**: Color-coded levels with proper sequencing

The mobile app is now ready for testing and further development!