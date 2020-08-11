import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MMesa } from './models/mesa.model';

@Injectable()
export class MesaService {
    constructor(
        @InjectModel("Mesas")
        private mesasModel:Model<MMesa>
    ) {
        

    }

    async getMesas():Promise<MMesa[]> {

        return await this.mesasModel.find().sort('-price -createdAt');

    }

        async setMesa(_mesa):Promise<MMesa> {
            const {name,price}=_mesa;
            const mesa=new this.mesasModel();
            mesa.name=name;
            mesa.price=price;

            return await mesa.save()
        
    }
}
