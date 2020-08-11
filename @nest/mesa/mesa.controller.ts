import { Body, Controller, Get, Post } from '@nestjs/common';
import { IMesa } from './dtos/mesa.dto';
import { MesaService } from './mesa.service';
import { MMesa } from './models/mesa.model';

@Controller('mesas')
export class MesaController {
    constructor(
        private mesaService:MesaService
    ) {

    }

    @Get()
    getMesas():Promise<MMesa[]>  {
            return this.mesaService.getMesas()
    }

    @Post()
    setMesa(
        @Body() mesa:IMesa):Promise<MMesa>{

            return this.mesaService.setMesa(mesa)
    }
}
