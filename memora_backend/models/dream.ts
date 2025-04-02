export enum DreamType {
  Lucid = "lucid",
  Nightmare = "nightmare",
  Fantasy = "fantasy",
  Regular = "regular",
}

export interface Dream {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: Date;
  type: DreamType;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDreamDto {
  title: string;
  description: string;
  date: Date;
  type: DreamType;
}

export interface UpdateDreamDto {
  title?: string;
  description?: string;
  date?: Date;
  type?: DreamType;
}

export interface DreamImage {
  id: string;
  dreamId: string;
  imageUrl: string;
  prompt: string;
  createdAt: Date;
}
