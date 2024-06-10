import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { User } from "@prisma/client";
import { UserRepository } from "./../repositories/user-repository";

interface GetUserResponse {
  user: User;
}

interface GetUser {
  id: string;
}

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: GetUser): Promise<GetUserResponse> {
    const user = await this.userRepository.getUserById(id);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return { user };
  }
}
