// Constants and configuration for the mobile app

export const APP_CONFIG = {
  // Backend API Configuration
  API_BASE_URL: 'https://chinese-vocabulary-learning-app.your-username.repl.co/api',
  
  // Audio Settings
  DEFAULT_PAUSE_DURATION: 2000, // 2 seconds
  DEFAULT_VOICE_SPEED: 1.0,
  DEFAULT_VOLUME: 1.0,
  
  // Storage Configuration
  MAX_STORAGE_SIZE_MB: 500,
  CACHE_DURATION_DAYS: 30,
  
  // HSK Configuration
  HSK_LEVELS: [1, 2, 3, 4, 5, 6],
  TOTAL_WORDS: 3610,
  TOTAL_GROUPS: 362,
  
  // Color Scheme
  HSK_COLORS: {
    1: '#ef4444', // red
    2: '#f97316', // orange  
    3: '#eab308', // yellow
    4: '#22c55e', // green
    5: '#3b82f6', // blue
    6: '#8b5cf6', // purple
  } as const,
  
  // App Theme
  COLORS: {
    primary: '#1e40af',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1f2937',
    textLight: '#6b7280',
  } as const,
};

export const PLAYBACK_MODES = {
  LOOP: 'loop',
  SEQUENTIAL: 'sequential', 
  REVIEW: 'review',
} as const;

export const DOWNLOAD_STATUS = {
  PENDING: 'pending',
  DOWNLOADING: 'downloading',
  COMPLETED: 'completed',
  ERROR: 'error',
} as const;

export const AUDIO_PHASES = {
  IDLE: 'idle',
  ENGLISH: 'english',
  PAUSE: 'pause',
  CHINESE: 'chinese',
  CHINESE2: 'chinese2',
} as const;