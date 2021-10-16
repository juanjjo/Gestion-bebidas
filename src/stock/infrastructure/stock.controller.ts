import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StockService } from '../application/stock.service';
import { StockDto } from './dtos/stock.dto'
import { StockDtoEdit } from './dtos/stock.dto.edit';
@Controller('stock')
export class StockController {

    constructor(private readonly serviceStock: StockService){

    }


    /**
     * 
     * @param stockDto 
     * @returns 
     */
    @ApiOperation({ summary: 'Solita crear una Stock' })
    @ApiResponse({
        status: 200,
        description: 'Crea la bebida especifica',
    })
    @Put(':id')
    async updateStock(@Body()stockDto: StockDtoEdit){
        let stock = await this.serviceStock.updateStock(stockDto);
        return stock;
    }

    /**
     * 
     * @returns 
    */
     @ApiOperation({ summary: 'solicitud de eliminacion de bebida' })
     @ApiResponse({
         status: 200,
         description: 'elimina un stock segun la bebida',
    })
    @Delete(':id')
    async deleteStock(@Param()id:number){
      let stock = await this.serviceStock.deleteStock(id);
      return {
        data: stock
      }
    }
 
}
