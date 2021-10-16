import { Module } from '@nestjs/common';
import { MarcaController } from './infrastructure/marca.controller';
import { MarcaService } from './application/marca.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entity/marca.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [MarcaService]
})
export class MarcaModule {}
