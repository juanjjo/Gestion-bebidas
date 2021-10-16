import { EntityRepository, Repository } from "typeorm";
import { Marca } from "./marca.entity";

@EntityRepository(Marca)
export class MarcaRepository extends Repository <Marca> {
  
}