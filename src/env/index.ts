import { z } from "zod"

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.string().url()
})

const _env = envSchema.safeParse(process.env)
console.log(process.env)

if(_env.success === false){
    console.log("❌ Invalid Enviroment Variables", _env.error);
    throw new Error("❌ Invalid environment variables");
}

export const env = _env.data;