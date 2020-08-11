import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {join} from "path";


export let TypeOrmConfig: TypeOrmModuleOptions = {
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'postgres',
         password: 'admin',
         database: 'basica',
         entities: [join(__dirname, '/**/*.entity.{ts,js}')],
         synchronize: true,
       };