# Mobile App Development Roadmap

## Your Three Key Requirements Analysis

### 1. **Bug Prevention & Reliability** ✅ ACHIEVABLE
- **Current Status**: The mobile app code is already written and structured properly
- **Solution**: Use Expo's stable development environment outside Replit
- **Timeline**: 1-2 days to set up proper development environment

### 2. **Offline Group Downloads** ✅ ACHIEVABLE  
- **Technology**: AsyncStorage + Expo FileSystem for local data storage
- **Approach**: Download HSK groups as JSON files with audio metadata
- **Storage**: Each group (~10 words) = ~50KB data + audio files
- **Timeline**: 3-4 days to implement download/sync system

### 3. **Background Audio with Screen Locked** ✅ ACHIEVABLE
- **Technology**: Expo AV + React Native Track Player
- **Capability**: Audio continues playing when screen is locked
- **Feature**: Lock screen controls (play/pause/skip)
- **Timeline**: 2-3 days to implement background audio system

## Recommended Next Steps

### Option 1: Complete Mobile App (Recommended)
**Timeline: 1-2 weeks total**

#### Phase 1: Environment Setup (2-3 days)
- Set up local Expo development environment  
- Transfer existing mobile code to proper Expo project
- Test basic app functionality on physical device
- Implement real HSK vocabulary data connection

#### Phase 2: Core Features (4-5 days)
- Integrate AudioManager with mobile-optimized audio system
- Implement offline group downloads using AsyncStorage
- Add progress tracking and sync capabilities
- Test all 362 HSK groups with real vocabulary data

#### Phase 3: Background Audio (3-4 days)
- Implement React Native Track Player for background audio
- Configure lock screen controls and notifications
- Add group looping behavior (as requested)
- Test audio continuation with screen locked

#### Phase 4: Polish & Testing (2-3 days)
- Add download progress indicators
- Implement retry mechanisms for failed downloads
- Test offline functionality thoroughly
- Performance optimization and bug fixes

### Option 2: Enhanced Web App for Mobile (Alternative)
**Timeline: 3-4 days**

If mobile development proves complex, we can enhance the web app:
- Progressive Web App (PWA) features for offline use
- Add to home screen capability 
- Background audio using Web Audio API
- Local storage for downloaded groups
- Mobile-optimized interface improvements

## Technical Architecture for Mobile App

### Data Storage Strategy
```
Local Storage Structure:
├── downloaded_groups/
│   ├── hsk_1_1.json (vocabulary data)
│   ├── hsk_1_2.json
│   └── ...
├── audio_cache/
│   ├── english_audio/
│   └── chinese_audio/
├── progress_data.json
└── app_settings.json
```

### Background Audio Implementation
- **Primary**: React Native Track Player for robust background playback
- **Fallback**: Expo AV for basic audio functionality
- **Lock Screen**: Media session controls for play/pause/skip
- **Group Looping**: Audio stays within selected group when screen locked

### Offline Download System
- **Strategy**: Download groups individually on-demand
- **Data**: JSON vocabulary + audio file URLs
- **Sync**: Check for updates when online
- **Storage**: AsyncStorage for metadata, FileSystem for audio files

## Development Environment Options

### Option A: Local Development (Recommended)
- Install Expo CLI locally on your computer
- Clone mobile code from Replit
- Develop and test with Expo Go on phone
- Deploy via Expo EAS Build when ready

### Option B: Use Replit Expo Template
- Start fresh with Replit's official Expo template
- Port your existing vocabulary data and audio system
- Work around Replit's limitations using alternative deployment

### Option C: Hybrid Approach
- Use Replit for backend API development
- Develop mobile app locally with Expo
- Connect mobile app to your Replit-hosted vocabulary API

## Cost & Time Estimate

### Development Time
- **Full Mobile App**: 1-2 weeks of focused development
- **Enhanced Web App**: 3-4 days for PWA features

### Technical Requirements
- **Mobile**: Expo CLI, local development environment
- **Deployment**: Apple Developer Account ($99/year) or Google Play ($25 one-time)
- **Testing**: Physical iOS/Android device

## Success Metrics

### Mobile App Completion Criteria
- ✅ 362 HSK groups fully functional offline
- ✅ Background audio continues with screen locked  
- ✅ Audio loops within groups (doesn't auto-advance)
- ✅ Reliable download/sync system for groups
- ✅ 2-second pause timing maintained
- ✅ Three playback modes working on mobile

## My Recommendation

**Start with Option 1 (Complete Mobile App)** because:

1. **Your requirements are absolutely achievable** with modern React Native/Expo
2. **The code foundation is already built** - just needs proper environment
3. **Offline downloads and background audio** are well-supported features
4. **1-2 weeks investment** gives you a professional mobile app
5. **Your 3,610 HSK vocabulary system** is perfect for mobile learning

Would you like me to start with Phase 1 (Environment Setup) by creating a proper Expo project structure and development plan?