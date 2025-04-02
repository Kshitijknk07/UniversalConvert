export interface LucidDreamStats {
  totalDreams: number;
  lucidDreams: number;
  lucidityRate: number;
  lastLucidDream: Date | null;
  streak: number;
}

export interface LucidDreamTip {
  id: string;
  tip: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  createdAt: Date;
}
