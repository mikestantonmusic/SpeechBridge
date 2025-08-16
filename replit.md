# Chinese Vocabulary Learning App

## Overview

This is a comprehensive full-stack web application that provides structured Chinese vocabulary learning with high-quality audio pronunciation. The app features 362 vocabulary groups with authentic HSK-level vocabulary totaling 3,610 words across HSK levels 1-6. Users can practice pronunciation with configurable playback order and settings, mark groups as "learned" or "not learned," and listen to sequential playback with English-Chinese pronunciation using high-quality Microsoft Xiaoxiao voice.

## Recent Changes (August 16, 2025)

- ✅ **Phase 1 Mobile Development Complete** - Created complete Expo project structure with all required services
- ✅ **Mobile architecture implemented** - VocabularyAPI, OfflineStorage, AudioManager, and HomeScreen ready
- ✅ **Background audio system configured** - React Native Track Player with iOS/Android permissions for screen-locked playback
- ✅ **Offline storage system built** - AsyncStorage-based downloading for all 362 HSK groups
- ✅ **TypeScript integration** - Proper type definitions and service layer architecture
- ✅ **Backend connection ready** - Mobile app can connect to existing Replit vocabulary API
- 📋 **Web app fully functional** - All 3,610 HSK words with audio features working perfectly

## Previous Changes (August 15, 2025)

- ✅ **Successfully expanded to 3,610 words** - Exceeded 3,500 word target with authentic HSK vocabulary
- ✅ **Removed all non-HSK groups** - Eliminated original groups like "Basic Greetings" and "Numbers & Time" to focus exclusively on authentic HSK content
- ✅ **Fixed group ordering issue** - Resolved client-side sorting that was overriding server-side HSK sequential ordering
- ✅ **HSK level distribution**: HSK 1 (155 words), HSK 2 (155 words), HSK 3 (760 words), HSK 4 (600 words), HSK 5 (900 words), HSK 6 (1,040 words)
- ✅ **Proper HSK sequencing** - Groups now display in correct order: HSK 1-1, HSK 1-2, etc.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and mobile components:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **API Style**: RESTful endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Session Storage**: In-memory storage with fallback to database

### Mobile Architecture
- **Framework**: React Native with Expo
- **Audio System**: Expo Speech API with advanced AudioManager
- **Offline Storage**: AsyncStorage for vocabulary caching
- **Navigation**: React Navigation 6 with stack navigator
- **Audio Timing**: 2-second pauses between words, matching web app
- **Playback Modes**: Loop (default), Sequential, and Review modes

## Key Components

### Database Schema
The application uses three main tables:
- **users**: User authentication and management
- **translations**: Stores translation history with audio metadata
- **audio_settings**: User preferences for audio generation

### API Endpoints
- `POST /api/translate`: English to Chinese translation using multiple free services (MyMemory, LibreTranslate, Microsoft Translator, Google Translate)
- `POST /api/generate-audio`: Audio metadata generation with browser-based TTS fallback
- `GET /api/translations`: Retrieve translation history
- `GET/POST /api/audio-settings`: Manage audio preferences

### Frontend Components
- **TranslationCard**: Main interface for text input and translation display
- **SettingsCard**: Audio customization controls (pause duration, voice speed, quality)
- **HistoryCard**: Translation history with playback and download features
- **AudioPlayer**: Custom audio playback component with controls

## Data Flow

1. User enters English text in the translation interface
2. Frontend sends translation request to backend API
3. Backend calls Google Translate API for Chinese translation
4. Translation and audio generation requests are processed
5. Results are stored in database and returned to frontend
6. Audio files are generated and made available for playback/download
7. Translation history is updated and displayed

## External Dependencies

### Third-Party Services
- **Google Translate API**: For English-to-Chinese translation
- **Neon Database**: PostgreSQL hosting (configured via DATABASE_URL)

### Key Libraries
- **Frontend**: React, TanStack Query, Wouter, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Drizzle ORM, Zod validation
- **Database**: PostgreSQL with Neon serverless driver
- **Development**: Vite, TypeScript, ESBuild

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- Express server with TypeScript compilation via tsx
- Database migrations handled by Drizzle Kit

### Production Build
- Frontend built with Vite to static assets
- Backend bundled with ESBuild for Node.js
- Single-server deployment serving both API and static files
- Environment variables for database and API key configuration

### Configuration Requirements
- `DATABASE_URL`: PostgreSQL connection string
- `GOOGLE_TRANSLATE_API_KEY` or `GOOGLE_API_KEY`: Google Translate API access

The application is designed for easy deployment on platforms like Replit, with automatic database provisioning and environment variable configuration.