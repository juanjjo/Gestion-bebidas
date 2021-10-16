import { PartialType } from '@nestjs/mapped-types';
import { BebidaDto } from './bebida.dto';
export class BebidaUpdateDto extends PartialType(BebidaDto){
    
}