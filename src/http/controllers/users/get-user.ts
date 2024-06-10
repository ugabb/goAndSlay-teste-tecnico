import { Request, Response } from "express";

import { makeGetUser } from "../../../usecases/factories/make-get-user";
import { z } from "zod";

export async function GetUser(req: Request, res: Response) {
  const getUserParams = z.object({
    id: z.string(),
  });

  const { id } = getUserParams.parse(req.params);

  const fetchUsers = makeGetUser();

  const user = await fetchUsers.execute({ id });

  return res.status(200).json(user);
}
