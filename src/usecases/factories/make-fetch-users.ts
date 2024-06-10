import { FetchUsersUseCase } from "./../fetch-users-usecase";
import { UserService } from "../../repositories/user-service";

export function makeFetchUsers() {
  const userService = new UserService();
  const useCase = new FetchUsersUseCase(userService);

  return useCase;
}
