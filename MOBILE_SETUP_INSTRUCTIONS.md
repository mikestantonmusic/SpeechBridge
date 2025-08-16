# How to Test Mobile App in Replit - Step by Step

## Method 1: Quick Test with Replit Built-in Tools

### Step 1: Open Replit Shell
- At the bottom of your Replit screen, click "Shell" tab
- You'll see a command prompt like: `~/Chinese-Vocabulary-Learning-App$`

### Step 2: Run These Commands (Copy/Paste One by One)

```bash
# Navigate to mobile folder
cd mobile/chinese-vocab-test

# Install Expo CLI globally  
npm install -g @expo/cli

# Install project dependencies
npm install

# Start the Expo development server
npx expo start
```

### Step 3: Test on Your Phone
1. **Install Expo Go** app on your phone from App Store/Google Play Store
2. **Scan QR Code** that appears in the Replit Shell
3. **Your mobile app opens** on your phone instantly!

## Method 2: Using Replit's Dropdown Menu (Even Easier)

### If you see dropdown menus in Replit:
1. Click dropdown menu in your workspace
2. Select "EAS init" to set up mobile development
3. Select "EAS update" to prepare the app
4. Select "EAS publish preview iOS" for iPhone testing

## What You'll See

### Home Screen Features:
- App status (downloaded groups, word count)
- Download HSK content button
- Start learning button
- Mobile-specific features list

### Group List Screen:
- HSK levels 1-6 with color coding
- Download buttons for offline use
- Study buttons for each group
- Progress tracking (learned/not learned)

### Vocabulary Screen:
- Word display (English, Chinese, Pinyin)
- Audio controls (play, pause, next, previous)
- Progress bar
- Playback mode selection

## Next Steps After Testing

Once the mobile app works on your phone:

### Phase 2: Add Real Vocabulary Data
- Import your 3,610 HSK words from the web app
- Connect to your existing vocabulary database
- Enable real group downloads

### Phase 3: Add Background Audio
- Install react-native-track-player
- Configure lock screen controls
- Add group looping when screen is locked

### Phase 4: Offline Features
- Download groups for offline practice
- Sync progress between online/offline
- Cache audio files locally

## Troubleshooting

### If Commands Don't Work:
- Make sure you're in the correct folder: `cd mobile/chinese-vocab-test`
- Try: `npm cache clean --force` then reinstall
- Use Replit's built-in package installer instead

### If Phone Can't Connect:
- Make sure phone and computer are on same WiFi
- Try refreshing the QR code: press 'r' in the shell
- Use Expo Go app, not your phone's camera

### If Expo Go Shows Error:
- The app structure is ready but needs real data
- This is normal - we'll add your vocabulary data next

The mobile app foundation is complete and ready for testing!