import { Injectable } from "@nestjs/common";
import { RecadoEntity } from "./entities/recado.entety";

@Injectable()

export class RecadosService {
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


  findAll(){
    return this.recados;
  }

  findOne(id: string){
    return this.recados.find(item => item.id === +id)
  }
  

}