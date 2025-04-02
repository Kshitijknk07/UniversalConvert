// deno-lint-ignore-file
import { db } from "../config/database.ts";
import {
  DreamAnalytics,
  DreamTheme,
  EmotionAnalysis,
} from "../models/dreamAnalytics.ts";
import { Dream } from "../models/dream.ts";

export class DreamAnalyticsService {
  static async generateDreamInsights(userId: string): Promise<DreamAnalytics> {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await db.queryObject<Dream>`
      SELECT * FROM dreams
      WHERE user_id = ${userId}
      AND dream_date >= ${thirtyDaysAgo}
      ORDER BY dream_date DESC
    `;

    const dreams = result.rows;

    return {
      userId,
      period: {
        start: thirtyDaysAgo,
        end: new Date(),
      },
      totalDreams: dreams.length,
      commonThemes: await this.analyzeThemes(dreams),
      emotionalPatterns: await this.analyzeEmotions(dreams),
      dreamTypeDistribution: this.analyzeDreamTypes(dreams),
      mostFrequentSymbols: await this.extractCommonSymbols(dreams),
      timePatterns: this.analyzeTimePatterns(dreams),
    };
  }

  private static async analyzeThemes(dreams: Dream[]): Promise<DreamTheme[]> {
    const themes: DreamTheme[] = [];

    for (const dream of dreams) {
      const keywords = await this.extractKeywords(dream.description);

      for (const keyword of keywords) {
        const existingTheme = themes.find((t) => t.theme === keyword);
        if (existingTheme) {
          existingTheme.frequency++;
          existingTheme.relatedDreams.push(dream.id);
        } else {
          themes.push({
            theme: keyword,
            frequency: 1,
            relatedDreams: [dream.id],
          });
        }
      }
    }

    return themes.sort((a, b) => b.frequency - a.frequency).slice(0, 5);
  }

  private static async analyzeEmotions(
    dreams: Dream[]
  ): Promise<EmotionAnalysis[]> {
    const emotions: EmotionAnalysis[] = [];

    for (const dream of dreams) {
      const dreamEmotions = await this.extractEmotions(dream.description);

      for (const emotion of dreamEmotions) {
        const existingEmotion = emotions.find(
          (e) => e.emotion === emotion.emotion
        );
        if (existingEmotion) {
          existingEmotion.frequency++;
          existingEmotion.intensity =
            (existingEmotion.intensity + emotion.intensity) / 2;
        } else {
          emotions.push({
            emotion: emotion.emotion,
            intensity: emotion.intensity,
            frequency: 1,
          });
        }
      }
    }

    return emotions.sort((a, b) => b.frequency - a.frequency);
  }

  private static analyzeDreamTypes(dreams: Dream[]): Record<string, number> {
    return dreams.reduce((acc, dream) => {
      acc[dream.type] = (acc[dream.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  private static async extractCommonSymbols(
    dreams: Dream[]
  ): Promise<string[]> {
    const symbolCounts = new Map<string, number>();

    for (const dream of dreams) {
      const symbols = await this.identifySymbols(dream.description);
      symbols.forEach((symbol) => {
        symbolCounts.set(symbol, (symbolCounts.get(symbol) || 0) + 1);
      });
    }

    return Array.from(symbolCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([symbol]) => symbol);
  }

  private static analyzeTimePatterns(dreams: Dream[]): {
    mostCommonDayOfWeek: string;
    mostCommonTimeOfDay: string;
  } {
    const daysCount = new Map<string, number>();
    const timeCount = new Map<string, number>();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const timeSlots = ["Morning", "Afternoon", "Evening", "Night"];

    dreams.forEach((dream) => {
      const date = new Date(dream.date);
      const day = days[date.getDay()];
      const hours = date.getHours();

      const timeSlot =
        hours < 6
          ? "Night"
          : hours < 12
          ? "Morning"
          : hours < 18
          ? "Afternoon"
          : "Evening";

      daysCount.set(day, (daysCount.get(day) || 0) + 1);
      timeCount.set(timeSlot, (timeCount.get(timeSlot) || 0) + 1);
    });

    return {
      mostCommonDayOfWeek: this.getMaxKey(daysCount),
      mostCommonTimeOfDay: this.getMaxKey(timeCount),
    };
  }

  private static async extractKeywords(text: string): Promise<string[]> {
    return text
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 4)
      .slice(0, 5);
  }

  private static async extractEmotions(
    text: string
  ): Promise<Array<{ emotion: string; intensity: number }>> {
    return [{ emotion: "joy", intensity: 0.8 }];
  }

  private static async identifySymbols(text: string): Promise<string[]> {
    return text
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3)
      .slice(0, 3);
  }

  private static getMaxKey(map: Map<string, number>): string {
    return Array.from(map.entries()).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  }
}
