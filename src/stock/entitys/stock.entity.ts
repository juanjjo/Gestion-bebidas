import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()

export class Stock{
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column({default:0})
    quantity: number;
  
}


   