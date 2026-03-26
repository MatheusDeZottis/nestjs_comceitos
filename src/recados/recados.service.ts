import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';
import { CreateRecadoDto } from './DTO/create-recado.dto';
import { UpdateRecadoDto } from './DTO/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadoRepository: Repository<RecadoEntity>,
  ) {}

  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  throwNotFoundErro() {
    throw new HttpException('Recado Não emcotrado', HttpStatus.NOT_FOUND);
  }

  async findOne(id: number) {
    const recado = await this.recadoRepository.findOne({
      where: { id },
    });
    if (recado) return recado;

    this.throwNotFoundErro();
  }

  async create(createRecado: CreateRecadoDto) {
    const novoRecado = {
      ...createRecado,
      lido: false,
      data: new Date(),
    };
    await this.recadoRepository.create(novoRecado);

    return this.recadoRepository.save(novoRecado);
  }

  async update(id: number, updateRecado: UpdateRecadoDto) {
    const partialUpdateRecadoDTO = {
      lido: updateRecado?.lido,
      texto: updateRecado?.texto,
    };

    const recado = await this.recadoRepository.preload({
      id,
      ...partialUpdateRecadoDTO,
    });

    if (!recado) return this.throwNotFoundErro();

    await this.recadoRepository.save(recado);

    return recado;
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOneBy({ id });

    if (!recado) {
      this.throwNotFoundErro();
    }

    return this.recadoRepository.remove(recado!);
  }
}
