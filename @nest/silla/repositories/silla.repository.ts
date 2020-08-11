import { EntityRepository, MoreThan, Repository } from "typeorm";
import { ISilla } from "./../dtos/silla.dto";
import { ESilla } from "../entities/silla.entity";

@EntityRepository(ESilla)
export class RSilla extends Repository<ESilla> {

    async getSillas(): Promise<ESilla[]>{

        return await this.find({
            order:{
                price:"DESC"
            }
        })

    }

    async getSilla(_price):Promise<ESilla[]> {
        return await this.find({
            where:{
                price:MoreThan(_price)
            },
            order:{
                name:"ASC"
            }
            
        })
    }



    async setSilla(_silla):Promise<ESilla> {
        
        const {name,price}=_silla;
        const silla=new ESilla();
        silla.name=name;
        silla.price=price;

        return await silla.save()

    }

}