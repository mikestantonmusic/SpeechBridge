import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, real, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const wordGroups = pgTable("word_groups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  isLearned: integer("is_learned").default(0).notNull(), // 0 = not learned, 1 = learned
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const vocabularyWords = pgTable("vocabulary_words", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  groupId: varchar("group_id").notNull().references(() => wordGroups.id),
  englishText: text("english_text").notNull(),
  chineseText: text("chinese_text").notNull(),
  pinyinText: text("pinyin_text").notNull(),
  orderIndex: integer("order_index").notNull(),
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

export const insertWordGroupSchema = createInsertSchema(wordGroups).pick({
  title: true,
  description: true,
  isLearned: true,
});

export const insertVocabularyWordSchema = createInsertSchema(vocabularyWords).pick({
  groupId: true,
  englishText: true,
  chineseText: true,
  pinyinText: true,
  orderIndex: true,
});

export const insertAudioSettingsSchema = createInsertSchema(audioSettings).pick({
  pauseDuration: true,
  voiceSpeed: true,
  audioQuality: true,
  languageOrder: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type WordGroup = typeof wordGroups.$inferSelect;
export type InsertWordGroup = z.infer<typeof insertWordGroupSchema>;
export type VocabularyWord = typeof vocabularyWords.$inferSelect;
export type InsertVocabularyWord = z.infer<typeof insertVocabularyWordSchema>;
export type AudioSettings = typeof audioSettings.$inferSelect;
export type InsertAudioSettings = z.infer<typeof insertAudioSettingsSchema>;
