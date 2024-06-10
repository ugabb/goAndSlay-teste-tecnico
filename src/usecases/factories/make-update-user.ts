import { UpdateUserUseCase } from "./../update-user-usecase";
import { UserService } from "./../../repositories/user-service";

export function makeUpdateUser() {
  const userService = new UserService();
  const useCase = new UpdateUserUseCase(userService);

  return useCase;
}
