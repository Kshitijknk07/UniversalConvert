// deno-lint-ignore-file
import { db } from "../config/database.ts";
import { Dream, CreateDreamDto } from "../models/dream.ts";

export class DreamService {
  static getUserDreamStats: any;
  static async createDream(
    userId: string,
    createDreamDto: CreateDreamDto
  ): Promise<Dream> {
    const { title, description, date, type } = createDreamDto;

    const result = await db.queryObject<Dream>`
      INSERT INTO dreams (user_id, title, description, dream_date, dream_type)
      VALUES (${userId}, ${title}, ${description}, ${date}, ${type})
      RETURNING *
    `;

    return result.rows[0];
  }

  static async getDreamById(id: string): Promise<Dream | null> {
    const result = await db.queryObject<Dream>`
      SELECT * FROM dreams WHERE id = ${id}
    `;

    return result.rows[0] || null;
  }

  static async getDreamsByUserId(userId: string): Promise<Dream[]> {
    const result = await db.queryObject<Dream>`
      SELECT * FROM dreams 
      WHERE user_id = ${userId}
      ORDER BY dream_date DESC
    `;

    return result.rows;
  }
}
