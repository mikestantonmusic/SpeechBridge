import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTranslationSchema, insertAudioSettingsSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// Input validation schemas
const translateRequestSchema = z.object({
  text: z.string().min(1).max(1000),
});

const audioRequestSchema = z.object({
  englishText: z.string().min(1),
  chineseText: z.string().min(1),
  settings: z.object({
    pauseDuration: z.number().min(0.1).max(5),
    voiceSpeed: z.number().min(0.5).max(2),
    audioQuality: z.enum(["standard", "high", "premium"]),
  }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Translation endpoint
  app.post("/api/translate", async (req, res) => {
    try {
      const { text } = translateRequestSchema.parse(req.body);
      
      // Use Google Translate API
      const googleTranslateApiKey = process.env.GOOGLE_TRANSLATE_API_KEY || process.env.GOOGLE_API_KEY || "";
      
      if (!googleTranslateApiKey) {
        return res.status(500).json({ 
          message: "Translation service not configured. Please provide GOOGLE_TRANSLATE_API_KEY environment variable." 
        });
      }

      const translateUrl = `https://translation.googleapis.com/language/translate/v2?key=${googleTranslateApiKey}`;
      
      const translateResponse = await fetch(translateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "zh-CN",
          format: "text",
        }),
      });

      if (!translateResponse.ok) {
        const errorText = await translateResponse.text();
        console.error("Translation API error:", errorText);
        return res.status(500).json({ 
          message: "Translation failed. Please check your API key and try again." 
        });
      }

      const translateData = await translateResponse.json();
      const translatedText = translateData.data.translations[0].translatedText;

      res.json({
        englishText: text,
        chineseText: translatedText,
      });
    } catch (error) {
      console.error("Translation error:", error);
      res.status(500).json({ 
        message: error instanceof z.ZodError ? "Invalid input text" : "Translation failed" 
      });
    }
  });

  // Generate audio endpoint
  app.post("/api/generate-audio", async (req, res) => {
    try {
      const { englishText, chineseText, settings } = audioRequestSchema.parse(req.body);
      
      const googleTtsApiKey = process.env.GOOGLE_TTS_API_KEY || process.env.GOOGLE_API_KEY || "";
      
      if (!googleTtsApiKey) {
        return res.status(500).json({ 
          message: "Text-to-speech service not configured. Please provide GOOGLE_TTS_API_KEY environment variable." 
        });
      }

      // Generate English audio
      const englishAudio = await generateSpeech(englishText, "en-US", "en-US-Standard-C", settings.voiceSpeed, googleTtsApiKey);
      
      // Generate Chinese audio
      const chineseAudio = await generateSpeech(chineseText, "zh-CN", "zh-CN-Standard-A", settings.voiceSpeed, googleTtsApiKey);

      // Create audio files directory if it doesn't exist
      const audioDir = path.join(process.cwd(), "audio_files");
      if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
      }

      // Save individual audio files
      const audioId = crypto.randomBytes(16).toString("hex");
      const englishPath = path.join(audioDir, `${audioId}_en.mp3`);
      const chinesePath = path.join(audioDir, `${audioId}_zh.mp3`);
      const combinedPath = path.join(audioDir, `${audioId}_combined.mp3`);

      fs.writeFileSync(englishPath, englishAudio);
      fs.writeFileSync(chinesePath, chineseAudio);

      // Combine audio files with pause (simplified - in production use FFmpeg)
      const combinedAudio = await combineAudioWithPause(englishAudio, chineseAudio, settings.pauseDuration);
      fs.writeFileSync(combinedPath, combinedAudio);

      // Calculate approximate duration
      const duration = (englishText.length * 0.1) + settings.pauseDuration + (chineseText.length * 0.1);

      // Save translation to storage
      const translation = await storage.createTranslation({
        englishText,
        chineseText,
        audioFileUrl: `/api/audio/${audioId}_combined.mp3`,
        duration,
      });

      res.json({
        id: translation.id,
        audioUrl: `/api/audio/${audioId}_combined.mp3`,
        englishAudioUrl: `/api/audio/${audioId}_en.mp3`,
        chineseAudioUrl: `/api/audio/${audioId}_zh.mp3`,
        duration,
      });
    } catch (error) {
      console.error("Audio generation error:", error);
      res.status(500).json({ 
        message: error instanceof z.ZodError ? "Invalid audio parameters" : "Audio generation failed" 
      });
    }
  });

  // Serve audio files
  app.get("/api/audio/:filename", (req, res) => {
    const filename = req.params.filename;
    const audioPath = path.join(process.cwd(), "audio_files", filename);
    
    if (!fs.existsSync(audioPath)) {
      return res.status(404).json({ message: "Audio file not found" });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    const stream = fs.createReadStream(audioPath);
    stream.pipe(res);
  });

  // Get translations history
  app.get("/api/translations", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const translations = await storage.getTranslations(limit);
      res.json(translations);
    } catch (error) {
      console.error("Get translations error:", error);
      res.status(500).json({ message: "Failed to fetch translations" });
    }
  });

  // Get audio settings
  app.get("/api/audio-settings", async (req, res) => {
    try {
      const settings = await storage.getAudioSettings();
      res.json(settings);
    } catch (error) {
      console.error("Get audio settings error:", error);
      res.status(500).json({ message: "Failed to fetch audio settings" });
    }
  });

  // Update audio settings
  app.post("/api/audio-settings", async (req, res) => {
    try {
      const settings = insertAudioSettingsSchema.parse(req.body);
      const updatedSettings = await storage.updateAudioSettings(settings);
      res.json(updatedSettings);
    } catch (error) {
      console.error("Update audio settings error:", error);
      res.status(500).json({ 
        message: error instanceof z.ZodError ? "Invalid settings" : "Failed to update settings" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function generateSpeech(text: string, languageCode: string, voiceName: string, speed: number, apiKey: string): Promise<Buffer> {
  const ttsUrl = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  
  const response = await fetch(ttsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: { text },
      voice: {
        languageCode,
        name: voiceName,
      },
      audioConfig: {
        audioEncoding: "MP3",
        speakingRate: speed,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`TTS API error: ${response.statusText}`);
  }

  const data = await response.json();
  return Buffer.from(data.audioContent, "base64");
}

async function combineAudioWithPause(audio1: Buffer, audio2: Buffer, pauseDuration: number): Promise<Buffer> {
  // Simplified audio combination - in production, use FFmpeg or similar
  // For now, just concatenate the buffers with a simple pause simulation
  const pauseSize = Math.floor(pauseDuration * 16000); // Approximate pause in bytes
  const pauseBuffer = Buffer.alloc(pauseSize, 0);
  
  return Buffer.concat([audio1, pauseBuffer, audio2]);
}
