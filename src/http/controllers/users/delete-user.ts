import { Request, Response } from "express";

import { makeDeleteUser } from "../../../usecases/factories/make-delete-user";
import { z } from "zod";
import { ResourceNotFoundError } from "../../../usecases/errors/resource-not-found-error";

export async function DeleteUser(req: Request, res: Response) {
  const deleteUserParams = z.object({
    id: z.string(),
  });

  const { id } = deleteUserParams.parse(req.params);

  try {
    const deleteUser = makeDeleteUser();

    await deleteUser.execute({ id });

    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(404).json({ message: error });
    }
  }
}
