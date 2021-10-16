import { Injectable } from '@nestjs/common';
import { BebidaDto } from '../infrastructure/dto/bebida.dto';
import { BebidaUpdateDto } from '../infrastructure/dto/bebida.dto.update';
import { BebidaRepository } from '../entity/bebida.repository';
import { MarcaRepository } from 'src/marca/entity/marca.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from 'src/marca/entity/marca.entity';
import { BebidaReadDto } from '../infrastructure/dto/bebida.read.dto';
import { classToPlain, plainToClass } from 'class-transformer';
import { Bebida } from '../entity/bebida.entity';
import { BebidaDtoAdd } from '../infrastructure/dto/bebidaDto.add';
import { TipoRepository } from 'src/tipo/tipo.repository';
import { Tipo } from 'src/tipo/entitys/tipo.entity';
import { StockRepository } from 'src/stock/entitys/stock.repository';
import { Stock } from 'src/stock/entitys/stock.entity';

@Injectable()
export class BebidaService {

    constructor(private readonly repositoryBebida: BebidaRepository,
        @InjectRepository(MarcaRepository)
        private readonly marcaRepository: MarcaRepository,
        private readonly tipoRepository: TipoRepository,
        private readonly stockRepository: StockRepository) {

    }

    async all() {
        let bebidas: Bebida[];
        bebidas = await this.repositoryBebida.find();
        return bebidas.map((bebida: Bebida) => plainToClass(BebidaReadDto, bebida));

    }

    async findOneById(id: number) {
        const bebida = await this.repositoryBebida.findOne(id)
        let bebidaDto: BebidaReadDto = new BebidaReadDto();
        bebidaDto.name = bebida.name;
        bebidaDto.amount = bebida.amount;
        bebidaDto.marca = bebida.marca.name;
        bebidaDto.id = bebida.id;
        bebidaDto.quantity = bebida.quantity;
        bebidaDto.size = bebida.size;
        return bebidaDto;
    }

    async add(bebidaDto: BebidaDtoAdd) {
        let bebida = this.repositoryBebida.create(bebidaDto)
        let marca: Marca = await this.marcaRepository.findOne(bebidaDto.idMarca);
        let tipo: Tipo = await this.tipoRepository.findOne(bebidaDto.idTipo);
        bebida.marca = marca;
        bebida.tipo = tipo;
        let stock = new Stock();
        stock.quantity = bebidaDto.quantity;
        bebida.stock = stock;
        return await this.repositoryBebida.save(bebida)
    }

    async update(id: number, bebidaDto: BebidaUpdateDto) {
        let bebida = await this.repositoryBebida.findOne(id);
        let bebidaUpdate = Object.assign(bebida, bebidaDto)
        return await this.repositoryBebida.save(bebidaUpdate)
    }

    async delete(id: number) {
        let bebida = await this.repositoryBebida.findOne(id);
        if (!bebida) {
            return null;
        }
        return await this.repositoryBebida.remove(bebida)
    }

    async findByName(name: string) {
        let bebida = await this.repositoryBebida.findOne({ name: name });
        return bebida;
    }
}
