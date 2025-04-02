import { db } from "../config/database.ts";
import { LucidDreamStats, LucidDreamTip } from "../models/lucidDream.ts";

export class LucidDreamService {
  static async getLucidDreamStats(userId: string): Promise<LucidDreamStats> {
    const result = await db.queryObject<{
      total: number;
      lucid: number;
      last_lucid: Date | null;
      streak: number;
    }>`
      WITH stats AS (
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE dream_type = 'lucid') as lucid,
          MAX(dream_date) FILTER (WHERE dream_type = 'lucid') as last_lucid,
          (
            SELECT COUNT(*)
            FROM dreams d2
            WHERE d2.user_id = ${userId}
            AND d2.dream_type = 'lucid'
            AND NOT EXISTS (
              SELECT 1
              FROM dreams d3
              WHERE d3.user_id = ${userId}
              AND d3.dream_date > d2.dream_date
              AND d3.dream_type != 'lucid'
            )
          ) as streak
        FROM dreams
        WHERE user_id = ${userId}
      )
      SELECT * FROM stats
    `;

    const stats = result.rows[0];
    return {
      totalDreams: stats.total,
      lucidDreams: stats.lucid,
      lucidityRate: stats.total > 0 ? (stats.lucid / stats.total) * 100 : 0,
      lastLucidDream: stats.last_lucid,
      streak: stats.streak,
    };
  }

  static async generateLucidDreamingTips(
    userStats: LucidDreamStats
  ): Promise<LucidDreamTip[]> {
    const experienceLevel = this.determineDifficultyLevel(userStats);

    const tips = await db.queryObject<LucidDreamTip>`
      SELECT * FROM lucid_dream_tips 
      WHERE difficulty = ${experienceLevel}
      ORDER BY RANDOM()
      LIMIT 3
    `;

    return tips.rows;
  }

  private static determineDifficultyLevel(
    stats: LucidDreamStats
  ): "beginner" | "intermediate" | "advanced" {
    if (stats.lucidDreams < 5) return "beginner";
    if (stats.lucidDreams < 20) return "intermediate";
    return "advanced";
  }
}
