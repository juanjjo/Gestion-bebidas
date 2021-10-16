import { Injectable } from '@nestjs/common';
import { Stock } from '../entitys/stock.entity';
import { StockRepository } from '../entitys/stock.repository';
import { StockDtoEdit } from '../infrastructure/dtos/stock.dto.edit';

@Injectable()
export class StockService {

    constructor(private readonly stockRepository: StockRepository){

    }
 
    async getAll(){
        return await this.stockRepository.find();
    }

    async updateStock(stockDto: StockDtoEdit){
        let stockFound = await this.findStock(stockDto.id);
        if(stockFound==null){
            return null;
        }
        Object.assign(stockFound,stockDto);
        return await this.stockRepository.save(stockFound);
    }


    async createStock(StockDto: Stock){
        let stock = this.stockRepository.create(StockDto)
        return await this.stockRepository.save(stock)
      return 'post';
    }

    async deleteStock(id: number){
      let stock = await this.findStock(id);
      if(stock==null){
        return null;
      }
      return await this.stockRepository.remove(stock)
    }

    async findStock(id: number){
        let stock = await this.stockRepository.findOne(id);
        if(!stock){
            return null;
        }
        return stock;
    }


}
