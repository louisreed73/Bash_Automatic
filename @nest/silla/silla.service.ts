import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ESilla } from './entities/silla.entity';
import { RSilla } from './repositories/silla.repository';

@Injectable()
export class SillaService {
    constructor(
        @InjectRepository(RSilla)
        private sillaRepo:RSilla
    ) {
    }

    getSillas():Promise<ESilla[]> {

        return this.sillaRepo.getSillas()

    }
    getSilla(_id):Promise<ESilla[]> {

        return this.sillaRepo.getSilla(_id)

    }

    setSilla(
        _silla
    ):Promise<ESilla> {


        return this.sillaRepo.setSilla(_silla)

    }
}
