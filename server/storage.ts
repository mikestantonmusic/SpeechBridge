import type { 
  User, 
  InsertUser, 
  WordGroup, 
  InsertWordGroup,
  VocabularyWord,
  InsertVocabularyWord,
  AudioSettings, 
  InsertAudioSettings 
} from "@shared/schema";
import { users, wordGroups, vocabularyWords, audioSettings } from "@shared/schema";
import { db } from "./db";
import { eq, asc } from "drizzle-orm";

export interface IStorage {
  // User methods
  createUser(user: InsertUser): Promise<User>;
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  
  // Word group methods
  getAllWordGroups(): Promise<WordGroup[]>;
  getWordsForGroup(groupId: string): Promise<VocabularyWord[]>;
  updateGroupLearnedStatus(groupId: string, isLearned: boolean): Promise<WordGroup>;
  
  // Audio settings methods
  getAudioSettings(): Promise<AudioSettings>;
  updateAudioSettings(settings: InsertAudioSettings): Promise<AudioSettings>;
}

export class DatabaseStorage implements IStorage {
  async createUser(user: InsertUser): Promise<User> {
    const [created] = await db.insert(users).values(user).returning();
    return created;
  }

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async getAllWordGroups(): Promise<WordGroup[]> {
    try {
      const groups = await db
        .select()
        .from(wordGroups)
        .orderBy(asc(wordGroups.createdAt));
      return groups;
    } catch (error) {
      console.error('Database error in getAllWordGroups:', error);
      throw error;
    }
  }

  async getWordsForGroup(groupId: string): Promise<VocabularyWord[]> {
    try {
      const words = await db
        .select()
        .from(vocabularyWords)
        .where(eq(vocabularyWords.groupId, groupId))
        .orderBy(asc(vocabularyWords.orderIndex));
      return words;
    } catch (error) {
      console.error('Database error in getWordsForGroup:', error);
      throw error;
    }
  }

  async updateGroupLearnedStatus(groupId: string, isLearned: boolean): Promise<WordGroup> {
    try {
      const [updatedGroup] = await db
        .update(wordGroups)
        .set({ isLearned: isLearned ? 1 : 0 })
        .where(eq(wordGroups.id, groupId))
        .returning();
      return updatedGroup;
    } catch (error) {
      console.error('Database error in updateGroupLearnedStatus:', error);
      throw error;
    }
  }

  async getAudioSettings(): Promise<AudioSettings> {
    try {
      let [settings] = await db.select().from(audioSettings).limit(1);
      
      if (!settings) {
        // Create default settings if none exist
        [settings] = await db
          .insert(audioSettings)
          .values({
            pauseDuration: 1.0,
            voiceSpeed: 1.0,
            audioQuality: "high",
            languageOrder: "english-first",
          })
          .returning();
      }
      
      return settings;
    } catch (error) {
      console.error('Database error in getAudioSettings:', error);
      throw error;
    }
  }

  async updateAudioSettings(newSettings: InsertAudioSettings): Promise<AudioSettings> {
    try {
      const currentSettings = await this.getAudioSettings();
      
      const [updated] = await db
        .update(audioSettings)
        .set(newSettings)
        .where(eq(audioSettings.id, currentSettings.id))
        .returning();
      
      return updated;
    } catch (error) {
      console.error('Database error in updateAudioSettings:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();