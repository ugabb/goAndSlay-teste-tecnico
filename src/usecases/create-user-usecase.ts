import { UserAlreadyExistError } from "./errors/user-already-exist-error";
import { Prisma, User } from "@prisma/client";
import { UserRepository } from "./../repositories/user-repository";

interface UserResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    age,
    email,
    name,
  }: Prisma.UserCreateInput): Promise<UserResponse> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new UserAlreadyExistError();
    }

    const user = await this.userRepository.createUser({
      age,
      email,
      name,
    });

    return { user };
  }
}
