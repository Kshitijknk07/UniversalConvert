import { db } from "../config/database.ts";
import {
  SharedDream,
  DreamComment,
  CreateSharedDreamDto,
  CreateCommentDto,
} from "../models/communityDream.ts";

export class CommunityService {
  static async shareDream(
    userId: string,
    createDreamDto: CreateSharedDreamDto
  ): Promise<SharedDream> {
    const result = await db.queryObject<SharedDream>`
      INSERT INTO shared_dreams (dream_id, user_id, title, description, is_public)
      VALUES (${createDreamDto.dreamId}, ${userId}, ${createDreamDto.title}, 
              ${createDreamDto.description}, ${createDreamDto.isPublic})
      RETURNING *
    `;

    return result.rows[0];
  }

  static async getSharedDreams(page = 1, limit = 10): Promise<SharedDream[]> {
    const offset = (page - 1) * limit;
    const result = await db.queryObject<SharedDream>`
      SELECT sd.*, u.username, COUNT(dl.user_id) as likes_count
      FROM shared_dreams sd
      LEFT JOIN users u ON sd.user_id = u.id
      LEFT JOIN dream_likes dl ON sd.id = dl.dream_id
      WHERE sd.is_public = true
      GROUP BY sd.id, u.username
      ORDER BY sd.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    return result.rows;
  }

  static async likeDream(dreamId: string, userId: string): Promise<void> {
    await db.queryObject`
      INSERT INTO dream_likes (dream_id, user_id)
      VALUES (${dreamId}, ${userId})
      ON CONFLICT (dream_id, user_id) DO NOTHING
    `;

    await db.queryObject`
      UPDATE shared_dreams
      SET likes = likes + 1
      WHERE id = ${dreamId}
    `;
  }

  static async addComment(
    dreamId: string,
    userId: string,
    commentDto: CreateCommentDto
  ): Promise<DreamComment> {
    const result = await db.queryObject<DreamComment>`
      INSERT INTO dream_comments (dream_id, user_id, content)
      VALUES (${dreamId}, ${userId}, ${commentDto.content})
      RETURNING *
    `;

    return result.rows[0];
  }

  static async getDreamComments(
    dreamId: string,
    page = 1,
    limit = 10
  ): Promise<DreamComment[]> {
    const offset = (page - 1) * limit;
    const result = await db.queryObject<DreamComment>`
      SELECT dc.*, u.username
      FROM dream_comments dc
      LEFT JOIN users u ON dc.user_id = u.id
      WHERE dc.dream_id = ${dreamId}
      ORDER BY dc.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    return result.rows;
  }
}
