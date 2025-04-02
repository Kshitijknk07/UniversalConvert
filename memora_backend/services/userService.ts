// deno-lint-ignore-file
import { User, CreateUserDto, UpdateUserDto } from "../models/user.ts";

const users = new Map<string, User>();

export class UserService {
  static async createUser(createUserDto: CreateUserDto): Promise<User> {
    const id = crypto.randomUUID();
    const now = new Date();

    const user: User = {
      id,
      ...createUserDto,
      lucidDreamCount: 0,
      createdAt: now,
      updatedAt: now,
    };

    users.set(id, user);
    return user;
  }

  static async getUserById(id: string): Promise<User | null> {
    return users.get(id) || null;
  }

  static async updateUser(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<User | null> {
    const user = users.get(id);
    if (!user) return null;

    const updatedUser: User = {
      ...user,
      ...updateUserDto,
      updatedAt: new Date(),
    };

    users.set(id, updatedUser);
    return updatedUser;
  }
}
