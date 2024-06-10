import { app } from "./app";
import {env} from "./env/index"



app.listen(env.PORT, () => {
    console.log("Server Running on Port: 3333");
})