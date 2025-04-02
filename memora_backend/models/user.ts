export interface User {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  lucidDreamCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface UpdateUserDto {
  name?: string;
  avatar?: string;
  bio?: string;
  lucidDreamCount?: number;
}
