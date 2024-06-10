import { CreateUserUseCase } from "./../create-user-usecase";
import { UserService } from "./../../repositories/user-service";

export function makeCreateUser() {
  const userService = new UserService();
  const useCase = new CreateUserUseCase(userService);

  return useCase;
}
