import { Request, Response } from "express";

import { makeDeleteUser } from "../../../usecases/factories/make-delete-user";
import { z } from "zod";

export async function DeleteUser(req: Request, res: Response) {
  const deleteUserParams = z.object({
    id: z.string(),
  });

  const { id } = deleteUserParams.parse(req.params);

  const deleteUser = makeDeleteUser();

  await deleteUser.execute({ id });

  return res.status(200).json({ message: "User Deleted" });
}
