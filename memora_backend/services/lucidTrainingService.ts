import { config } from "../config/env.ts";

export class LucidTrainingService {
  private static API_KEY = config.GEMINI_API_KEY;
  private static API_URL = config.GEMINI_API_URL;

  static async generatePersonalizedTips(userStats: {
    lucidDreams: number;
    totalDreams: number;
    lastLucidDate?: Date;
  }): Promise<string> {
    try {
      const prompt = `As a lucid dreaming expert, provide personalized tips for a user with:
        - ${userStats.lucidDreams} lucid dreams
        - ${userStats.totalDreams} total dreams recorded
        - Last lucid dream: ${
          userStats.lastLucidDate?.toLocaleDateString() || "Never"
        }
        Consider their experience level and provide specific, actionable advice.`;

      const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate tips: ${response.statusText}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      throw error;
    }
  }

  static async analyzeLucidityProgress(
    dreams: Array<{
      date: Date;
      isLucid: boolean;
      description: string;
    }>
  ): Promise<string> {
    try {
      const prompt = `Analyze this user's lucid dreaming progress and provide insights:
        ${JSON.stringify(
          dreams.map((d) => ({
            date: d.date,
            isLucid: d.isLucid,
            description: d.description,
          }))
        )}`;

      const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to analyze progress: ${response.statusText}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      throw error;
    }
  }

  static async suggestTechniques(
    userLevel: "beginner" | "intermediate" | "advanced"
  ): Promise<string> {
    try {
      const prompt = `Suggest specific lucid dreaming techniques for a ${userLevel} level practitioner. 
        Include detailed steps and best practices.`;

      const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to suggest techniques: ${response.statusText}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      throw error;
    }
  }
}
