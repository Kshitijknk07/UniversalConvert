// deno-lint-ignore-file
import { db } from "../config/database.ts";
import { AdminRole, ReportedDream } from "../models/admin.ts";

export class AdminService {
  static async isAdmin(userId: string): Promise<boolean> {
    const result = await db.queryObject<AdminRole>`
      SELECT * FROM admin_roles 
      WHERE user_id = ${userId} 
      AND role IN ('admin', 'moderator')
    `;
    return result.rows.length > 0;
  }

  static async removeDream(dreamId: string, adminId: string): Promise<void> {
    await db.queryObject`BEGIN`;
    try {
      await db.queryObject`
        UPDATE reported_dreams
        SET status = 'removed', reviewed_at = CURRENT_TIMESTAMP
        WHERE dream_id = ${dreamId}
      `;

      await db.queryObject`
        DELETE FROM dream_likes WHERE dream_id = ${dreamId}
      `;

      await db.queryObject`
        DELETE FROM dream_comments WHERE dream_id = ${dreamId}
      `;

      await db.queryObject`
        DELETE FROM shared_dreams WHERE id = ${dreamId}
      `;

      await db.queryObject`COMMIT`;
    } catch (error) {
      await db.queryObject`ROLLBACK`;
      throw error;
    }
  }
}
