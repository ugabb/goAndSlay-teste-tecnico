import { ResourceNotFoundError } from "./../../../usecases/errors/resource-not-found-error";
import { Request, Response } from "express";
import { z } from "zod";

import { makeUpdateUser } from "../../../usecases/factories/make-update-user";

export async function updateUser(req: Request, res: Response) {
  const updateUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    age: z.coerce.number(),
  });
  const updateUserParamsSchema = z.object({
    id: z.string(),
  });

  const { age, email, name } = updateUserBodySchema.parse(req.body);
  const { id } = updateUserParamsSchema.parse(req.params);

  const updateUser = makeUpdateUser();

  try {
    await updateUser.execute({
      id,
      age,
      email,
      name,
    });

    return res.status(200).json({ message: "User updated" });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(404).json({ message: error });
    }
  }
}
