import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MesaController } from './mesa.controller';
import { MesaService } from './mesa.service';
import { SMesa } from './schemas/mesa.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:"Mesas",
        schema:SMesa
      }
    ])
  ],
  controllers: [MesaController],
  providers: [MesaService]
})
export class MesaModule {}
