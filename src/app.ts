
import {config} from "dotenv";
import express from "express"

// iniciar variaveis de ambiente
config()

export const app =  express()


app.use(express.json());