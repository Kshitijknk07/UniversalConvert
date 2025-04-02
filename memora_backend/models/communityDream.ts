export interface SharedDream {
  id: string;
  dreamId: string;
  userId: string;
  title: string;
  description: string;
  isPublic: boolean;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DreamComment {
  id: string;
  dreamId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateSharedDreamDto {
  dreamId: string;
  title: string;
  description: string;
  isPublic: boolean;
}

export interface CreateCommentDto {
  content: string;
}
