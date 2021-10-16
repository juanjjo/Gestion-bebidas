
import { Bebida } from "src/bebida/entity/bebida.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Marca {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    name: string

    /* @OneToMany(() => Bebida, bebida => bebida.marca)
    
    bebidas: Bebida[]; */
    
}