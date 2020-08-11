
import express, { json } from "express";

import* as http from "http";

const dotEnv=require("dotenv");

const reload=require("reload");

const {log:l}=console;

l("Hola!!!!");

const app=express();

dotEnv.config();

const port=process.env.PORT;

app.use(express.static("public"));

app.use("/static",express.static("public"));

const server=http.createServer(app);

reload(app)
.then(
    server.listen(port,()=>{
        l(`Server Listening on PORT: ${port} .............`)
    })
)
.catch((e:any)=>{
    throw new Error(e)
})

