import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RSilla } from './repositories/silla.repository';
import { SillaController } from './silla.controller';
import { SillaService } from './silla.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([
            RSilla
        ])

    ],
    controllers: [SillaController],
    providers: [SillaService]
})
export class SillaModule {}
