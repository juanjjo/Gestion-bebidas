import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcaModule } from './marca/marca.module';
import { Marca } from './marca/entity/marca.entity';
import { Bebida } from './bebida/entity/bebida.entity';
import { BebidaModule } from './bebida/bebida.module';
import { ConfigModule } from '@nestjs/config';
import { TipoModule } from './tipo/tipo.module';
import { Tipo } from './tipo/entitys/tipo.entity';
import { Stock } from './stock/entitys/stock.entity';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    MarcaModule,
    BebidaModule,
    TipoModule,
    StockModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Marca, Bebida, Tipo, Stock],
      synchronize: true,
    }),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
