import { Request, Response } from "express";

import { makeGetUser } from "../../../usecases/factories/make-get-user";
import { z, ZodError } from "zod";
import { ResourceNotFoundError } from "../../../usecases/errors/resource-not-found-error";

export async function GetUser(req: Request, res: Response) {
  const getUserParams = z.object({
    id: z.string().uuid(),
  });

  try {
    const { id } = getUserParams.parse(req.params);
    const fetchUsers = makeGetUser();

    const user = await fetchUsers.execute({ id });

    return res.status(200).json(user);
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
