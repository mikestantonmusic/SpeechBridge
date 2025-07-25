import { type User, type InsertUser, type Translation, type InsertTranslation, type AudioSettings, type InsertAudioSettings } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createTranslation(translation: InsertTranslation): Promise<Translation>;
  getTranslations(limit?: number): Promise<Translation[]>;
  getTranslation(id: string): Promise<Translation | undefined>;
  
  getAudioSettings(): Promise<AudioSettings | undefined>;
  updateAudioSettings(settings: InsertAudioSettings): Promise<AudioSettings>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private translations: Map<string, Translation>;
  private audioSettings: AudioSettings | undefined;

  constructor() {
    this.users = new Map();
    this.translations = new Map();
    // Initialize default audio settings
    this.audioSettings = {
      id: randomUUID(),
      pauseDuration: 1.0,
      voiceSpeed: 1.0,
      audioQuality: "high",
    };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTranslation(insertTranslation: InsertTranslation): Promise<Translation> {
    const id = randomUUID();
    const translation: Translation = {
      ...insertTranslation,
      id,
      createdAt: new Date(),
    };
    this.translations.set(id, translation);
    return translation;
  }

  async getTranslations(limit: number = 10): Promise<Translation[]> {
    const allTranslations = Array.from(this.translations.values());
    return allTranslations
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  async getTranslation(id: string): Promise<Translation | undefined> {
    return this.translations.get(id);
  }

  async getAudioSettings(): Promise<AudioSettings | undefined> {
    return this.audioSettings;
  }

  async updateAudioSettings(settings: InsertAudioSettings): Promise<AudioSettings> {
    this.audioSettings = {
      ...this.audioSettings!,
      ...settings,
    };
    return this.audioSettings;
  }
}

export const storage = new MemStorage();
