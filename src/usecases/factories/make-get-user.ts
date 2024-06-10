import { GetUserUseCase } from "./../get-user-usecase";
import { UserService } from "../../repositories/user-service";

export function makeGetUser() {
  const userService = new UserService();
  const useCase = new GetUserUseCase(userService);

  return useCase;
}
