import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class MarcaDto {
    @ApiProperty({ example: 'nike', description: 'Nombre de la marca' })
    @IsNotEmpty()
    @IsString() 
    name: string
}