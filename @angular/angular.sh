#!/usr/bin/bash

cp -r $Angular/pages  $Angular/layouts $Angular/components $Angular/app-routing.module.ts $Angular/app.component.html ./src/app && cp $Angular/index.html $Angular/styles.scss ./src

git add .

git commit -m "inicio Basic Angular"