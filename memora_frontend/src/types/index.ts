export interface Dream {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: Date;
  type: "lucid" | "nightmare" | "fantasy" | "regular";
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  lucidDreamCount: number;
  createdAt: Date;
  updatedAt: Date;
}
