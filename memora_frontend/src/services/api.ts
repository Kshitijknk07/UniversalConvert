import { Dream, User } from "../types";

const API_URL = "http://localhost:8000";

export const api = {
  async getDreams(): Promise<Dream[]> {
    const response = await fetch(`${API_URL}/dreams`);
    return response.json();
  },

  async createDream(
    dream: Omit<Dream, "id" | "userId" | "createdAt" | "updatedAt">
  ): Promise<Dream> {
    const response = await fetch(`${API_URL}/dreams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dream),
    });
    return response.json();
  },

  async updateDream(
    id: string,
    dream: Partial<Omit<Dream, "id" | "userId" | "createdAt" | "updatedAt">>
  ): Promise<Dream> {
    const response = await fetch(`${API_URL}/dreams/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dream),
    });
    return response.json();
  },

  async deleteDream(id: string): Promise<void> {
    await fetch(`${API_URL}/dreams/${id}`, {
      method: "DELETE",
    });
  },

  async getUserProfile(userId: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
  },
};
