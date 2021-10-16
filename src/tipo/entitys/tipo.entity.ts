import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tipo{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    descripcion: string;
}