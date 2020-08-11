#!/usr/bin/bash


npm init -y

npm i express 

npm i -D @types/express  @types/node @types/dotenv typescript dotenv reload nodemon npm-run-all 


echo node_modules/ > .gitignore

echo PORT=8080 > .env

echo .env >> .gitignore

mkdir src

git init



echo -e '
import express, { json } from "express";\n
import* as http from "http";\n
import dotEnv from "dotenv";\n
const reload=require("reload");\n
const {log:l}=console;\n
l("Hola!!!!");\n
const app=express();\n
dotEnv.config();\n
const port=process.env.PORT;\n
app.use(express.static("public"));\n
app.use("/static",express.static("public"));\n
const server=http.createServer(app);\n
reload(app)
.then(
    server.listen(port,()=>{
        l(`Server Listening on PORT: ${port} .............`)
    })
)
.catch((e:any)=>{
    throw new Error(e)
})
' > src/app.ts

cp $Typescript/public  public -r
cp $Typescript/src/  . -r


node -p "JSON.stringify({...require('./package.json'),
scripts:{_nd:'nodemon --ext js,css,html -w public', 
tsc:'tsc -w', 
start:'npm-run-all --parallel _nd tsc'}, 
main:'public/app.js'},
 null, 2)" > package2.json && mv package2.json package.json;

tsc --init


git add .

git co -am "Inicialización de Repositorio"

