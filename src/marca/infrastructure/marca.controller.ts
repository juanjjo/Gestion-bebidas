
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MarcaDto } from './dto/marca.dtos';
import { MarcaService } from '../application/marca.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';

@ApiTags('Marcas')
@Controller('marca')
export class MarcaController {
    constructor(private readonly serviceMarca: MarcaService) {

    }

    @Get("all")
    @ApiOperation({ summary: 'Solicita listado de marcas' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve listado de marcas',
    })
    async getAllMarcas() {
        const data = await this.serviceMarca.all()
        return {
            message: "lista de marcas",
            data: data
        }
    }

    @Get("one/:id")
    async getOne(@Param('id',ParseIntPipe) idMarca:number){
        let marca = await this.serviceMarca.getOne(idMarca)
        return {
            message: "Bebida creada",
            data: marca
        }
    }
    @Post("add")
    @ApiOperation({ summary: 'Agregar marca' })
    @ApiResponse({
        status: 200,
        description: 'Agrega nueva marca',
    })
    async addMarca(@Body() dto: MarcaDto) {
        console.log(dto)
        const data = await this.serviceMarca.add(dto)
        return {
            message: "Marca agregada",
            data: data
        }
    }

    @Put('update/:id')
    @ApiOperation({ summary: 'Modificar marca' })
    @ApiResponse({
        status: 200,
        description: 'Modifica un marca',
    })
    async updateMarca(@Param('id') idMarca: number, @Body() marca: MarcaDto) {
        const data = await this.serviceMarca.update(idMarca, marca)
        return {
            message: "Marca modificada",
            data: data
        }
    }

    @Delete('delete/:id')
    @ApiOperation({ summary: 'Eliminar marca' })
    @ApiResponse({
        status: 200,
        description: 'Elimina una marca',
    })
    async deleteMarca(@Param('id') idMarca: number) {
        const data = await this.serviceMarca.delete(idMarca)
        return {
            message: "Marca eliminada",
            data: data
        }
    }
}

