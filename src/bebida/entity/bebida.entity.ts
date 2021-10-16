import { Marca } from "src/marca/entity/marca.entity";
import { Stock } from "src/stock/entitys/stock.entity";
import { Tipo } from "src/tipo/entitys/tipo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bebida {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ nullable: false })
    name: string;
    @Column({ nullable: false })
    size: string;
    @Column({ nullable: false })
    amount: number;
    @Column({ nullable: false })
    quantity: number;

    @ManyToOne((type) => Marca, {
        eager: true,
        cascade: true,
        onDelete: 'CASCADE',
        nullable: false
    })
    @JoinColumn({ name: "idMarca" })
    marca: Marca;

    @ManyToOne((type) => Tipo, {
        eager: true,
        cascade: true,
        onDelete: 'CASCADE',
        //nullable: false
    })

    @JoinColumn({ name: "idTipo" })
    tipo: Tipo;


    @OneToOne((type) => Stock, {
        eager: true,
        cascade: true,
        //onDelete: 'CASCADE',
        //onUpdate: 'CASCADE',
        nullable: false
    })
    @JoinColumn({ name: "idStock"  })
    stock: Stock;
}