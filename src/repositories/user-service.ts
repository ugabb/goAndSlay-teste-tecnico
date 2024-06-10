import { Prisma, User } from "@prisma/client";
import { UserRepository } from "./user-repository";
import { prisma } from "../lib/prisma";

export class UserService implements UserRepository {
  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        age: user.age,
        email: user.email,
        name: user.name,
      },
    });

    return createdUser;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return null;

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async updateUser(id: string, user: Prisma.UserUpdateInput): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        age: user.age,
        email: user.email,
        name: user.name,
      },
    });

    return updatedUser;
  }
  async deleteUser(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
