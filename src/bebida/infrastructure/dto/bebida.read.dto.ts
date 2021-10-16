import { ApiProperty } from '@nestjs/swagger';
import { isInt, IsInt, isNotEmpty, IsNotEmpty,  IsString } from 'class-validator';
import { BebidaDto } from './bebida.dto';
export class BebidaReadDto{
    
    @IsNotEmpty()
    @IsString() 
    id : number;
    @ApiProperty({ example: 'juan', description: 'Nombre de la bebida' })
    @IsNotEmpty()
    @IsString() 
    name: string;
    @ApiProperty({ example: '2.25 ltrs', description: 'Tamaño de la bebida' })
    @IsNotEmpty() 
    @IsString()
    size: string;
    @ApiProperty({ example: 200, description: 'Precio de la bebida' })
    @IsNotEmpty() 
    @IsInt()
    amount: number;
    @ApiProperty({ example: 10, description: 'Cantidad total de la bebida' })
    @IsNotEmpty()
    @IsInt() 
    quantity: number;

    @ApiProperty({ example: '2.25 ltrs', description: 'Tamaño de la bebida' })
    @IsNotEmpty() 
    @IsString()
    marca: string;
    
}