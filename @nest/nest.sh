#!/usr/bin/bash


cp $Nest/AngularBasic -r ..

cp $Nest/silla $Nest/mesa -r ./src



cp $Nest/app.module.ts $Nest/TypeConfig.ts ./src

npm i @nestjs/serve-static

npm i @nestjs/typeorm typeorm pg

npm i @nestjs/mongoose mongoose



echo -e "node_modules\ndist" > .gitignore


git init .

git add .

git commit -m "Inicialización del repositorio"

