import { Request, Response } from "express";
import { z, ZodError } from "zod";

import { makeCreateUser } from "../../../usecases/factories/make-create-user";
import { UserAlreadyExistError } from "../../../usecases/errors/user-already-exist-error";

export async function createUser(req: Request, res: Response) {
  const createUserBodySchema = z.object({
    name: z.string().min(1, "Name is required"), // Adiciona uma mensagem de erro se o nome estiver vazio
    email: z.string().email("Invalid email address"), // Verifica se o email é válido
    age: z.coerce.number().positive("Age must be a positive number"), // Garante que a idade é um número positivo
  });

  try {
    const { age, email, name } = createUserBodySchema.parse(req.body);

    const createUser = makeCreateUser();

    await createUser.execute({
      age,
      email,
      name,
    });

    return res.status(201).json({ message: "User created" });
  } catch (error) {
    // Tratando erros de validação
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: `Validation failed: ${error.errors.map((e) => {
          return e.message;
        })}`,
      });
    }

    // Se email já existe
    if (error instanceof UserAlreadyExistError) {
      return res.status(400).json({ message: error.message });
    }

    // Tratando outros erros
    return res.status(500).json({ message: "Internal server error" });
  }
}
