import { db } from "../config/database.ts";
import { Dream } from "../models/dream.ts";

export class SearchService {
  static async searchDreams(userId: string, query: string): Promise<Dream[]> {
    const result = await db.queryObject<Dream>`
      SELECT * FROM dreams
      WHERE user_id = ${userId}
      AND (
        title ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`}
      )
      ORDER BY dream_date DESC
    `;

    return result.rows;
  }

  static async filterDreams(
    userId: string,
    type?: string,
    dateRange?: string,
    emotion?: string
  ): Promise<Dream[]> {
    let daysAgo = 0;
    switch (dateRange) {
      case "last7days":
        daysAgo = 7;
        break;
      case "last30days":
        daysAgo = 30;
        break;
      case "last90days":
        daysAgo = 90;
        break;
      default:
        daysAgo = 0;
    }

    const dateFilter =
      daysAgo > 0 ? new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000) : null;

    const result = await db.queryObject<Dream>`
      SELECT * FROM dreams
      WHERE user_id = ${userId}
      ${type ? db.queryObject`AND dream_type = ${type}` : db.queryObject``}
      ${
        dateFilter
          ? db.queryObject`AND dream_date >= ${dateFilter}`
          : db.queryObject``
      }
      ${
        emotion
          ? db.queryObject`AND emotions @> ARRAY[${emotion}]::text[]`
          : db.queryObject``
      }
      ORDER BY dream_date DESC
    `;

    return result.rows;
  }
}
