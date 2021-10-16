
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, isNumber, IsObject, IsString } from 'class-validator';
import { MarcaDto } from 'src/marca/infrastructure/dto/marca.dtos';
import { TipoDto } from 'src/tipo/dtos/tipo.dto';
export class BebidaDto {
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

    /* @ApiProperty({ example: 1, description: 'id de la marca' })
    @IsNotEmpty()
    @IsInt() 
    idMarca:number; */  
    @ApiProperty({ example: { name: "tumina" }, description: 'marca asociada a la bebida' })
    marca: MarcaDto;
    @ApiProperty({ example: { name: "Tipo" }, description: 'tipo asociada a la bebida' })
    tipo: TipoDto;
}