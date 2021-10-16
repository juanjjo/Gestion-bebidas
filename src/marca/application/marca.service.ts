import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from '../entity/marca.entity';
import { MarcaRepository } from '../entity/marca.repository';
import { MarcaDto } from '../infrastructure/dto/marca.dtos';

@Injectable()
export class MarcaService {

    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepository: MarcaRepository) {

    }

    async all() {
        return await this.marcaRepository.find()
    }

    async getOne(id: number) {
        return await this.marcaRepository.findOne(id)
    }


    async add(marcaDto: MarcaDto) {
        let marca = this.marcaRepository.create(marcaDto)
        console.log(marca)
        return await this.marcaRepository.save(marca)
    }

    async update(id: number, marcaDto: MarcaDto) {
        let marca = await this.getOne(id)
        let marcaUpdate = Object.assign(marca, marcaDto)
        return await this.marcaRepository.save(marcaUpdate)
    }

    async delete(id: number) {
        let marca = await this.getOne(id)
        return await this.marcaRepository.remove(marca)
    }

}
