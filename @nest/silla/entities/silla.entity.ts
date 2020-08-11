import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique
} from "typeorm"

@Unique(["id"])
@Entity()
export class ESilla extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    price: number;

}