import { Router } from "express";
import { createUser } from "./create-user";
import { FetchUsers } from "./fetch-users";
import { GetUser } from "./get-user";

export const userRoutes = Router();

userRoutes.post("/users", createUser);
userRoutes.get("/users", FetchUsers);
userRoutes.get("/users/:id", GetUser);
