export interface DreamTheme {
  theme: string;
  frequency: number;
  relatedDreams: string[];
}

export interface EmotionAnalysis {
  emotion: string;
  intensity: number;
  frequency: number;
}

export interface DreamAnalytics {
  userId: string;
  period: {
    start: Date;
    end: Date;
  };
  totalDreams: number;
  commonThemes: DreamTheme[];
  emotionalPatterns: EmotionAnalysis[];
  dreamTypeDistribution: Record<string, number>;
  mostFrequentSymbols: string[];
  timePatterns: {
    mostCommonDayOfWeek: string;
    mostCommonTimeOfDay: string;
  };
}
