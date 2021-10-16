import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TipoDto } from './dtos/tipo.dto';
import { TipoService } from './tipo.service';

@ApiTags('Tipo')
@Controller('tipo')
export class TipoController {

    constructor(private readonly serviceTipo: TipoService) {

    }

    @Get("all")
    @ApiOperation({ summary: 'Solicita listado de Tipos' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve listado de Tipos',
    })
    async getAllTipo() {
        const data = await this.serviceTipo.all()
        return {
            message: "lista de Tipos",
            data: data
        }
    }
    @Post("add")
    @ApiOperation({ summary: 'Agregar Tipos' })
    @ApiResponse({
        status: 200,
        description: 'Agrega nueva Tipos',
    })
    async addTipo(@Body() dto: TipoDto) {
        console.log(dto)
        const data = await this.serviceTipo.add(dto)
        return {
            message: "Tipos agregada",
            data: data
        }
    }

    @Put('update/:id')
    @ApiOperation({ summary: 'Modificar Tipos' })
    @ApiResponse({
        status: 200,
        description: 'Modifica un Tipos',
    })
    async updateTipo(@Param('id') idTipo: number, @Body() marca: TipoDto) {
        const data = await this.serviceTipo.update(idTipo, marca)
        return {
            message: "Tipos modificada",
            data: data
        }
    }

    @Delete('delete/:id')
    @ApiOperation({ summary: 'Eliminar Tipos' })
    @ApiResponse({
        status: 200,
        description: 'Elimina una Tipos',
    })
    async deleteTipo(@Param('id') idTipo: number) {
        const data = await this.serviceTipo.delete(idTipo)
        return {
            message: "Tipos eliminada",
            data: data
        }
    }

}
