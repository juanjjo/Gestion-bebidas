import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BebidaService } from '../application/bebida.service';
import { BebidaUpdateDto } from './dto/bebida.dto.update';
import { BebidaDtoAdd } from './dto/bebidaDto.add';
@ApiTags('Bebidas')
@Controller('bebida')
export class BebidaController {
    constructor(private readonly serviceBebida: BebidaService) {

    }

    @Get('all')
    @ApiOperation({ summary: 'Solicita listado de bebidas' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve listado de bebidas',
    })
    async getAllBebida() {
        const data = await this.serviceBebida.all()

        return {
            message: "lista de bebidas",
            data: data
        }
    }
    @ApiOperation({ summary: 'Solicitud de una Bebida' })
    @ApiResponse({
        status: 200,
        description: 'Retorna una Bebida',
    })
    @Get('one/:id')
    async getOne(@Param('id') id: number) {
        const data = await this.serviceBebida.findOneById(id)

        return {
            message: "bebida encontrada",
            data: data
        }
    }

    @ApiOperation({ summary: 'Solita crear una Bebida' })
    @ApiResponse({
        status: 200,
        description: 'Crea la bebida especifica',
    })
    @Post('add/')
    async createBebida(@Body() dto: BebidaDtoAdd ) {
        
        const data = await this.serviceBebida.add(dto)
        return {
            message: "Bebida creada",
            data: data
        }
    }

    @ApiOperation({ summary: 'Modificacion de una Bebida' })
    @ApiResponse({
        status: 200,
        description: 'Modificacion de la bebida completada ',
    })
    @Put('update/:id')
    async modificarBebida(@Param('id') idMarca: number, @Body() dto: BebidaUpdateDto) {
        const data = await this.serviceBebida.update(idMarca, dto)
        return {
            message: "Bebida modificada",
            data: data
        }
    }

    @ApiOperation({ summary: 'Solita eliminar una Bebida' })
    @ApiResponse({
        status: 200,
        description: 'Eliminacion de la Bebida Completa',
    })
    @Delete('delete/:id')
    async deleteBebida(@Param('id') idMarca: number) {
        const data = await this.serviceBebida.delete(idMarca)
        if(data ==null){
            return {message: "La bebida no existe"}
        }
        return {
            message: "Bebida eliminada",
            data: data
        }
    }


    @ApiOperation({ summary: 'Solicita buscar por nombre' })
    @ApiResponse({
        status: 200,
        description: 'buscar bebida por nombre',
    })
    @Get('oneByName/:name')
    async findByName(@Param('name') name:string){

        const bebida = await this.serviceBebida.findByName(name);
        return {
            message: "bebida encontrada",
            data: bebida
        }
    }
}
