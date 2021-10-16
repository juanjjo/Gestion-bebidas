import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockService } from './application/stock.service';
import { Stock } from './entitys/stock.entity';
import { StockController } from './infrastructure/stock.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Stock])],
  providers: [StockService],
  controllers: [StockController]
})
export class StockModule {}
