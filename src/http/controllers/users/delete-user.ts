import { Request, Response } from "express";

import { makeDeleteUser } from "../../../usecases/factories/make-delete-user";
import { z, ZodError } from "zod";
import { ResourceNotFoundError } from "../../../usecases/errors/resource-not-found-error";

export async function DeleteUser(req: Request, res: Response) {
  const deleteUserParams = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = deleteUserParams.parse(req.params);
    const deleteUser = makeDeleteUser();

    await deleteUser.execute({ id });

    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "User not found" });
    }

    // Tratando erros de validação
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: `Validation failed: ${error.errors.map((e) => {
          return e.message;
        })}`,
      });
    }

    // Tratando outros erros
    return res.status(500).json({ message: "Internal server error" });
  }
}
