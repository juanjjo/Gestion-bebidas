import { Injectable } from '@nestjs/common';
import { TipoRepository } from './tipo.repository';
import { TipoDto } from './dtos/tipo.dto';

@Injectable()
export class TipoService {

    constructor(private readonly tipoRepository: TipoRepository) {

    }

    async all() {
        return await this.tipoRepository.find()
    }

    async getOne(id: number) {
        return await this.tipoRepository.findOne(id)
    }

    async add(tipoDto: TipoDto) {
        let tipo = this.tipoRepository.create(tipoDto)

        return await this.tipoRepository.save(tipo)
    }

    async update(id: number, tipoDto: TipoDto) {
        let tipo = await this.getOne(id)
        let tipoUpdate = Object.assign(tipo, tipoDto)
        return await this.tipoRepository.save(tipoUpdate)
    }

    async delete(id: number) {
        let tipo = await this.getOne(id)
        return await this.tipoRepository.remove(tipo)
    }

}
