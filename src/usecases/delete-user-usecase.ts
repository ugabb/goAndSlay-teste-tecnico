import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { UserRepository } from "./../repositories/user-repository";

interface DeleteUser {
  id: string;
}

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: DeleteUser): Promise<void> {
    const userAlreadyExist = await this.userRepository.getUserById(id);

    if (!userAlreadyExist) {
      throw new ResourceNotFoundError();
    }

    await this.userRepository.deleteUser(id);
  }
}
