import { Prisma, User } from "@prisma/client";
import { UserRepository } from "./../repositories/user-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface UserResponse {
  user: User;
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    id,
    age,
    email,
    name,
  }: Prisma.UserUpdateInput): Promise<UserResponse> {
    const userAlreadyExists = await this.userRepository.getUserById(
      id as string
    ); // o id é certeza que vai vim, pois vai chegar por params da url. Logo no controller já háverar verificação do id

    if (!userAlreadyExists) {
      throw new ResourceNotFoundError();
    }

    const user = await this.userRepository.updateUser(id as string, {
      age,
      email,
      name,
    });

    return { user };
  }
}
