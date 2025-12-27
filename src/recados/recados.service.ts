import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RecadoEntity } from "./entities/recado.entety";
import { CreateRecadoDto } from "./DTO/create-recado.dto";
import { UpdateRecadoDto } from "./DTO/update-recado.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()

export class RecadosService {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadoRepository: Repository<RecadoEntity>,
  ) { }

  private recados: RecadoEntity[] = [

    {
      id: 1,
      texto: 'Este é um teste',
      de: 'joana',
      para: 'joao',
      lido: false,
      data: new Date(),
    },
  ];


  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  throwNotFoundErro() {
    throw new HttpException("Recado Não emcotrado", HttpStatus.NOT_FOUND);
  }

 async findOne(id: number) {
   // const recado = this.recados.find(item => item.id === +id)
    const recado = await this.recadoRepository.findOne({
      where: { id, },
    })
    if (recado) return recado;

    this.throwNotFoundErro();

  }


  async create(createRecado: CreateRecadoDto) {
    const novoRecado = {
      ...createRecado,
      lido: false,
      data: new Date()
    };
    await this.recadoRepository.create(novoRecado);

    return this.recadoRepository.save(novoRecado);
  }

  update(id: string, updateRecado: UpdateRecadoDto) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    )
    if (recadoExistenteIndex <= 0) {
      this.throwNotFoundErro()
    }

    const recadoExistente = this.recados[recadoExistenteIndex];
    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...updateRecado,
    }
  }

 async remove(id: number) {
  const recado = await this.recadoRepository.findOneBy({ id });

  if (!recado) {
    this.throwNotFoundErro();
  }

  return this.recadoRepository.remove(recado!);
}

}

