import { PartialType } from "@nestjs/swagger";
import { StockDto } from "./stock.dto";


export class StockDtoEdit extends PartialType(StockDto){
    id: number;
}