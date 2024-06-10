import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { userRoutes } from "./http/controllers/users/routes";

// iniciar variaveis de ambiente
config();

export const app = express();

app.use(cors());

app.use(express.json());
app.use(userRoutes);
