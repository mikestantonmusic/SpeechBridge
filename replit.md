# Text-to-Speech Translation App

## Overview

This is a full-stack web application that provides English-to-Chinese translation with audio generation capabilities. Users can input English text, get Chinese translations via Google Translate API, and generate audio files with customizable settings like pause duration, voice speed, and audio quality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

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

## Key Components

### Database Schema
The application uses three main tables:
- **users**: User authentication and management
- **translations**: Stores translation history with audio metadata
- **audio_settings**: User preferences for audio generation

### API Endpoints
- `POST /api/translate`: English to Chinese translation using Google Translate API
- `POST /api/audio`: Audio generation with custom settings
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