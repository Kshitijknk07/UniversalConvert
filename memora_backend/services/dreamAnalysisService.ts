import { config } from "../config/env.ts";

export class DreamAnalysisService {
  private static API_KEY = config.GEMINI_API_KEY;
  private static API_URL = config.GEMINI_API_URL;

  static async analyzeDream(description: string) {
    try {
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
                  text: `Analyze this dream and provide insights about its themes, emotions, and symbols: ${description}`,
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
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Dream analysis failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      throw error;
    }
  }

  static async checkStatus(): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`);
      return response.ok;
    } catch {
      return false;
    }
  }
}
