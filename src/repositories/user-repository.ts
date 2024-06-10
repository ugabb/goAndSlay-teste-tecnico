import { Prisma, User } from "@prisma/client";

export interface UserRepository {
  createUser(user: Prisma.UserCreateInput): Promise<User>;
  getUserById(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  updateUser(id: string, user: Prisma.UserUpdateInput): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
