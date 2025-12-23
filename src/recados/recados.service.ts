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

  private lasrID = 1;
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

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id)

    if (recado) return recado;

    this.throwNotFoundErro();

  }


  create(createRecado: CreateRecadoDto) {
    this.lasrID++;
    const id = this.lasrID;
    const novoRecado = {
      id,
      ...createRecado,
      lido: false,
      data: new Date()
    };
    this.recados.push(novoRecado)

    return novoRecado
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

  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    if (recadoExistenteIndex <= 0) {
      this.throwNotFoundErro()
    }

    const recado = this.recados[recadoExistenteIndex]

    this.recados.splice(recadoExistenteIndex, 1);

    return recado
  }
}

