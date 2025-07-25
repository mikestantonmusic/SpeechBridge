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
  // Translation endpoint with multiple free services
  app.post("/api/translate", async (req, res) => {
    try {
      const { text } = translateRequestSchema.parse(req.body);
      
      // Try multiple free translation services in order of preference
      let translatedText = "";
      let serviceName = "";
      
      // Option 1: Try MyMemory (completely free)
      try {
        const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`;
        const myMemoryResponse = await fetch(myMemoryUrl);
        const myMemoryData = await myMemoryResponse.json();
        
        if (myMemoryData.responseStatus === 200 && myMemoryData.responseData?.translatedText) {
          translatedText = myMemoryData.responseData.translatedText;
          serviceName = "MyMemory";
        }
      } catch (error) {
        console.log("MyMemory translation failed, trying next service...");
      }
      
      // Option 2: Try LibreTranslate public instance (if MyMemory fails)
      if (!translatedText) {
        try {
          const libreResponse = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              q: text,
              source: 'en',
              target: 'zh',
              format: 'text'
            })
          });
          
          if (libreResponse.ok) {
            const libreData = await libreResponse.json();
            if (libreData.translatedText) {
              translatedText = libreData.translatedText;
              serviceName = "LibreTranslate";
            }
          }
        } catch (error) {
          console.log("LibreTranslate failed, trying next service...");
        }
      }
      
      // Option 3: Try Microsoft Translator (if configured)
      if (!translatedText) {
        const microsoftKey = process.env.MICROSOFT_TRANSLATOR_KEY;
        const microsoftRegion = process.env.MICROSOFT_TRANSLATOR_REGION || "global";
        
        if (microsoftKey) {
          try {
            const microsoftResponse = await fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=zh-Hans', {
              method: 'POST',
              headers: {
                'Ocp-Apim-Subscription-Key': microsoftKey,
                'Ocp-Apim-Subscription-Region': microsoftRegion,
                'Content-type': 'application/json'
              },
              body: JSON.stringify([{text: text}])
            });
            
            if (microsoftResponse.ok) {
              const microsoftData = await microsoftResponse.json();
              if (microsoftData[0]?.translations?.[0]?.text) {
                translatedText = microsoftData[0].translations[0].text;
                serviceName = "Microsoft Translator";
              }
            }
          } catch (error) {
            console.log("Microsoft Translator failed, trying Google...");
          }
        }
      }
      
      // Option 4: Try Google Translate (if configured)
      if (!translatedText) {
        const googleApiKey = process.env.GOOGLE_TRANSLATE_API_KEY || process.env.GOOGLE_API_KEY;
        
        if (googleApiKey) {
          try {
            const googleResponse = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${googleApiKey}`, {
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

            if (googleResponse.ok) {
              const googleData = await googleResponse.json();
              if (googleData.data?.translations?.[0]?.translatedText) {
                translatedText = googleData.data.translations[0].translatedText;
                serviceName = "Google Translate";
              }
            }
          } catch (error) {
            console.log("Google Translate failed");
          }
        }
      }
      
      // If all services failed
      if (!translatedText) {
        return res.status(500).json({ 
          message: "All translation services are currently unavailable. Please try again later or configure API keys for Microsoft Translator or Google Translate." 
        });
      }

      res.json({
        englishText: text,
        chineseText: translatedText,
        service: serviceName
      });
      
    } catch (error) {
      console.error("Translation error:", error);
      res.status(500).json({ 
        message: error instanceof z.ZodError ? "Invalid input text" : "Translation failed" 
      });
    }
  });

  // Generate audio endpoint - fallback to browser-based TTS
  app.post("/api/generate-audio", async (req, res) => {
    try {
      const { englishText, chineseText, settings } = audioRequestSchema.parse(req.body);
      
      // For now, return audio metadata without generating actual files
      // The frontend will use browser Speech Synthesis API for audio generation
      const audioId = crypto.randomBytes(16).toString("hex");
      
      // Calculate approximate duration
      const englishDuration = englishText.length * 0.08; // ~80ms per character
      const chineseDuration = chineseText.length * 0.12; // ~120ms per character for Chinese
      const totalDuration = englishDuration + settings.pauseDuration + chineseDuration;

      // Save translation to storage
      const translation = await storage.createTranslation({
        englishText,
        chineseText,
        audioFileUrl: null, // No file generated server-side
        duration: totalDuration,
      });

      res.json({
        id: translation.id,
        audioUrl: null, // Will be generated client-side
        englishAudioUrl: null,
        chineseAudioUrl: null,
        duration: totalDuration,
        useClientTTS: true, // Flag to indicate client-side generation
        settings
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
