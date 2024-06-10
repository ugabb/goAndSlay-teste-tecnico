import { DeleteUserUseCase } from "./../delete-user-usecase";
import { UserService } from "../../repositories/user-service";

export function makeDeleteUser() {
  const userService = new UserService();
  const useCase = new DeleteUserUseCase(userService);

  return useCase;
}
