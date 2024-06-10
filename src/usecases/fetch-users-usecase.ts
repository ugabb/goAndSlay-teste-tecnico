import { User } from "@prisma/client";
import { UserRepository } from "./../repositories/user-repository";

interface FetchUsersResponse {
  users: User[];
}

export class FetchUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<FetchUsersResponse> {
    const users = await this.userRepository.getAllUsers();

    return { users };
  }
}
