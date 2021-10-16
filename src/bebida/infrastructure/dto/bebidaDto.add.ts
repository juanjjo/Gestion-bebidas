import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, isNumber, IsString } from 'class-validator';
import { TipoDto } from 'src/tipo/dtos/tipo.dto';
export class BebidaDtoAdd{
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

    @ApiProperty({ example: 1, description: 'id de la marcade la bebida' })
    @IsNotEmpty()
    @IsInt() 
    idMarca: number;

    @ApiProperty({ example: 1, description: 'id del tipo' })
    @IsNotEmpty()
    @IsNotEmpty()
    idTipo: number;

    

}