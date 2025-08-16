// Type definitions for the mobile app

export interface VocabularyWord {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  groupId: string;
  order: number;
}

export interface WordGroup {
  id: string;
  name: string;
  description: string;
  hsklevel: number;
  groupNumber: number;
  isLearned: number;
  order: number;
  wordCount?: number;
  isDownloaded?: boolean;
  downloadedAt?: Date;
}

export interface AudioSettings {
  id: string;
  userId: string;
  pauseDuration: number;
  voiceSpeed: number;
  voiceQuality: string;
  autoPlay: boolean;
  repeatCount: number;
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