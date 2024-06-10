import { Router } from "express";
import { createUser } from "./create-user";
import { FetchUsers } from "./fetch-users";

export const userRoutes = Router();

userRoutes.post("/users", createUser);
userRoutes.get("/users", FetchUsers);
