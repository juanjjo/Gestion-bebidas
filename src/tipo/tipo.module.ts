import { Module } from '@nestjs/common';
import { TipoService } from './tipo.service';
import { TipoController } from './tipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipo } from './entitys/tipo.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Tipo])],
  providers: [TipoService],
  controllers: [TipoController]
})
export class TipoModule {}
