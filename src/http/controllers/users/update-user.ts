import { ResourceNotFoundError } from "./../../../usecases/errors/resource-not-found-error";
import { Request, Response } from "express";
import { z, ZodError } from "zod";

import { makeUpdateUser } from "../../../usecases/factories/make-update-user";

export async function updateUser(req: Request, res: Response) {
  const updateUserBodySchema = z.object({
    name: z.string().min(1, "Name is required"), // Adiciona uma mensagem de erro se o nome estiver vazio
    email: z.string().email("Invalid email address"), // Verifica se o email é válido
    age: z.coerce.number().positive("Age must be a positive number"), // Garante que a idade é um número positivo
  });

  const updateUserParamsSchema = z.object({
    id: z.string().uuid(), //valida se é um uuid
  });

  try {
    const { age, email, name } = updateUserBodySchema.parse(req.body);
    const { id } = updateUserParamsSchema.parse(req.params);

    const updateUser = makeUpdateUser();
    await updateUser.execute({
      id,
      age,
      email,
      name,
    });

    return res.status(200).json({ message: "User updated" });
  } catch (error) {
    // Tratando erros de validação
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: `Validation failed: ${error.errors.map((e) => {
          return e.message;
        })}`,
      });
    }

    if (error instanceof ResourceNotFoundError) {
      return res.status(404).json({ message: "User not found" });
    }

    // Tratando outros erros
    return res.status(500).json({ message: "Internal server error" });
  }
}
