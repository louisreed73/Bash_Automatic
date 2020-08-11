import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ISilla } from './dtos/silla.dto';
import { ESilla } from './entities/silla.entity';
import { SillaService } from './silla.service';

@Controller('sillas')
export class SillaController {
    constructor(
        private sillaService:SillaService
    ) {

    }

    @Get()
    getSillas():Promise<ESilla[]> {
           return  this.sillaService.getSillas()
    }
    @Get(":price")
    getSilla(
        @Param("price") price:string
    ):Promise<ESilla[]> {
           return  this.sillaService.getSilla(price)
    }

    @Post() 
    setSilla(
        @Body() silla:ISilla
    ):Promise<ESilla> {

        return this.sillaService.setSilla(silla)

    }


}
