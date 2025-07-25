import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, real, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const translations = pgTable("translations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  englishText: text("english_text").notNull(),
  chineseText: text("chinese_text").notNull(),
  audioFileUrl: text("audio_file_url"),
  duration: real("duration"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const audioSettings = pgTable("audio_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  pauseDuration: real("pause_duration").default(1.0).notNull(),
  voiceSpeed: real("voice_speed").default(1.0).notNull(),
  audioQuality: text("audio_quality").default("high").notNull(),
  languageOrder: text("language_order").default("english-first").notNull(), // "english-first" or "chinese-first"
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTranslationSchema = createInsertSchema(translations).pick({
  englishText: true,
  chineseText: true,
  audioFileUrl: true,
  duration: true,
});

export const insertAudioSettingsSchema = createInsertSchema(audioSettings).pick({
  pauseDuration: true,
  voiceSpeed: true,
  audioQuality: true,
  languageOrder: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Translation = typeof translations.$inferSelect;
export type InsertTranslation = z.infer<typeof insertTranslationSchema>;
export type AudioSettings = typeof audioSettings.$inferSelect;
export type InsertAudioSettings = z.infer<typeof insertAudioSettingsSchema>;
