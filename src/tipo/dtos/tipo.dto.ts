import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class TipoDto {
    @ApiProperty({ example: 'name', description: 'Nombre del Tipo' })
    @IsNotEmpty()
    @IsString()
    name: string;
    @ApiProperty({ example: 'description', description: 'Descripcion del Tipo' })
    @IsNotEmpty()
    @IsString()
    descripcion: string;
}
