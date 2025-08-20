import { WordGroup as BaseWordGroup, VocabularyWord as BaseVocabularyWord } from '../data/vocabulary';

// Extend VocabularyWord if you need extra fields for the app
export interface VocabularyWord extends BaseVocabularyWord {
  order: number;
}

// Extend WordGroup with app-specific fields
export interface WordGroup extends BaseWordGroup {
  groupNumber: number;
  isLearned: boolean;
  order: number;
  isDownloaded?: boolean;
  downloadedAt?: Date | string;
}

// The rest of your types remain unchanged

export interface AudioSettings {
  id: string;
  userId?: string;
  pauseDuration: number;
  voiceSpeed: number;
  voiceQuality?: string;
  audioQuality?: string;
  autoPlay?: boolean;
  repeatCount?: number;
  languageOrder?: string;
}

export type PlaybackMode = "loop" | "sequential" | "review";

export interface AudioState {
  isPlaying: boolean;
  currentGroupId: string | null;
  currentWordIndex: number;
  currentPhase: "idle" | "english" | "pause" | "chinese" | "chinese2";
  playbackMode: PlaybackMode;
  volume: number;
  isBuffering: boolean;
}

export interface DownloadProgress {
  groupId: string;
  groupName: string;
  progress: number; // 0-100
  status: "pending" | "downloading" | "completed" | "error";
  totalWords: number;
  downloadedWords: number;
  error?: string;
}

export interface AppSettings {
  downloadOnWifiOnly: boolean;
  backgroundAudioEnabled: boolean;
  lockScreenControls: boolean;
  autoDownloadUpdates: boolean;
  maxStorageSize: number; // MB
}

export interface UserProgress {
  groupId: string;
  completedWords: string[];
  totalWords: number;
  lastStudiedAt: Date;
  streakDays: number;
  accuracyScore: number;
}