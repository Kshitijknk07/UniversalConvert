import { DreamImage } from "../models/dream.ts";
import { db } from "../config/database.ts";
import { config } from "../config/env.ts";

export class ImageGenerationService {
  static async getDreamImage(dreamId: string): Promise<DreamImage | null> {
    const result = await db.queryObject<DreamImage>`
      SELECT * FROM dream_images 
      WHERE dream_id = ${dreamId}
      ORDER BY created_at DESC 
      LIMIT 1
    `;

    return result.rows[0] || null;
  }
  private static API_KEY = config.STABILITY_API_KEY;
  private static API_URL = config.STABILITY_API_URL;

  static async generateImage(
    dreamId: string,
    description: string
  ): Promise<DreamImage> {
    if (!this.API_KEY) {
      throw new Error("Stability API key not configured");
    }

    try {
      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.API_KEY}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: description,
              weight: 1,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`Image generation failed: ${response.statusText}`);
      }

      const data = await response.json();
      const imageUrl = data.artifacts[0].base64;

      const result = await db.queryObject<DreamImage>`
        INSERT INTO dream_images (dream_id, image_url, prompt)
        VALUES (${dreamId}, ${imageUrl}, ${description})
        RETURNING *
      `;

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async checkStatus(): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_URL}/engines`, {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
        },
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
