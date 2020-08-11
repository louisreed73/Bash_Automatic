import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { TypeOrmConfig } from "./TypeConfig";
import { SillaModule } from "./silla/silla.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MesaModule } from "./mesa/mesa.module";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../AngularBasic/dist/AngularBasic"),
    }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    MongooseModule.forRoot(
      "mongodb+srv://admin:admin@cluster0-jsmjq.mongodb.net/basic?retryWrites=true&w=majority"
    ),
    SillaModule,
    MesaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
