import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from 'src/marca/entity/marca.entity';
import { MarcaModule } from 'src/marca/marca.module';
import { Stock } from 'src/stock/entitys/stock.entity';
import { Tipo } from 'src/tipo/entitys/tipo.entity';
import { BebidaService } from './application/bebida.service';
import { Bebida } from './entity/bebida.entity';
import { BebidaController } from './infrastructure/bebida.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Bebida,Marca,Tipo,Stock]),MarcaModule],
  providers: [BebidaService],
  controllers: [BebidaController],
})
export class BebidaModule {}
