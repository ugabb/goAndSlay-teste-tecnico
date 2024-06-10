import { Request, Response } from "express";
import { z } from "zod";

import { makeCreateUser } from "../../../usecases/factories/make-create-user";

export async function createUser(req: Request, res: Response) {
  const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    age: z.coerce.number(),
  });

  const { age, email, name } = createUserBodySchema.parse(req.body);

  const createUser = makeCreateUser();

  await createUser.execute({
    age,
    email,
    name,
  });

  return res.status(201).json({ message: "User created" });
}
