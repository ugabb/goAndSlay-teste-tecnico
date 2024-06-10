import { Request, Response } from "express";

import { makeFetchUsers } from "../../../usecases/factories/make-fetch-users";

export async function FetchUsers(req: Request, res: Response) {
  const fetchUsers = makeFetchUsers();

  const users = await fetchUsers.execute();

  return res.status(200).json(users);
}
