import { Request, Response } from "express";

import { makeGetUser } from "../../../usecases/factories/make-get-user";
import { z } from "zod";
import { ResourceNotFoundError } from "../../../usecases/errors/resource-not-found-error";

export async function GetUser(req: Request, res: Response) {
  const getUserParams = z.object({
    id: z.string(),
  });

  const { id } = getUserParams.parse(req.params);

  try {
    const fetchUsers = makeGetUser();

    const user = await fetchUsers.execute({ id });

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(404).json({ message: error });
    }
  }
}
