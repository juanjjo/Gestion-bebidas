import { EntityRepository, Repository } from "typeorm";
import { Bebida } from "./bebida.entity";

@EntityRepository(Bebida)
export class BebidaRepository extends Repository <Bebida>{
    
}