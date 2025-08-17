import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWordGroupSchema, insertVocabularyWordSchema, insertAudioSettingsSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all word groups
  app.get("/api/word-groups", async (req, res) => {
    try {
      const groups = await storage.getAllWordGroups();
      // Add groupNumber by parsing from the title, e.g., "HSK 1 3" → groupNumber: 3
      const groupsWithNumber = groups.map(group => {
        let hsklevel = 0, groupNumber = 0;
        const match = /^HSK (\d+) (\d+)$/.exec(group.title);
        if (match) {
          hsklevel = parseInt(match[1], 10);
          groupNumber = parseInt(match[2], 10);
        }
        return { ...group, hsklevel,groupNumber };
      });
      res.json(groupsWithNumber);
    } catch (error) {
      // ...
    }
  });

  // Get words for a specific group
  app.get("/api/word-groups/:groupId/words", async (req, res) => {
    try {
      const { groupId } = req.params;
      const words = await storage.getWordsForGroup(groupId);
          // Transform to mobile-compatible format
      const mobileWords = words.map(word => ({
        id: word.id,
        english: word.englishText, // mobile expects 'english' not 'englishText'
        chinese: word.chineseText, // mobile expects 'chinese' not 'chineseText'  
        pinyin: word.pinyinText,   // mobile expects 'pinyin' not 'pinyinText'
        groupId: word.groupId,
        order: word.orderIndex     // mobile expects 'order' not 'orderIndex'
      }));
    res.json(mobileWords);
    } catch (error) {
      console.error("Failed to fetch words for group:", error);
      res.status(500).json({ error: "Failed to fetch words for group" });
    }
  });

  // Update group learned status
  app.patch("/api/word-groups/:groupId", async (req, res) => {
    try {
      const { groupId } = req.params;
      const { isLearned } = req.body;
      
      if (typeof isLearned !== 'boolean') {
        return res.status(400).json({ error: "isLearned must be a boolean" });
      }

      const updatedGroup = await storage.updateGroupLearnedStatus(groupId, isLearned);
      res.json(updatedGroup);
    } catch (error) {
      console.error("Failed to update group status:", error);
      res.status(500).json({ error: "Failed to update group status" });
    }
  });

  // Get audio settings
  app.get("/api/audio-settings", async (req, res) => {
    try {
      const settings = await storage.getAudioSettings();
      res.json(settings);
    } catch (error) {
      console.error("Failed to fetch audio settings:", error);
      res.status(500).json({ error: "Failed to fetch audio settings" });
    }
  });

  // Update audio settings
  app.post("/api/audio-settings", async (req, res) => {
    try {
      const data = insertAudioSettingsSchema.parse(req.body);
      const settings = await storage.updateAudioSettings(data);
      res.json(settings);
    } catch (error) {
      console.error("Failed to update audio settings:", error);
      res.status(500).json({ error: "Failed to update audio settings" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}