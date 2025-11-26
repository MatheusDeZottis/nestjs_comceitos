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
  create(body: any){
    this.lasrID ++;
    const id = this.lasrID;
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado)
    
    return novoRecado
  }

  update(id: string, body: any){
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    )

    if( recadoExistenteIndex >= 0){
      const recadoExistente = this.recados[recadoExistenteIndex];
      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      };
    }
  }

  remove(id: string){
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    if(recadoExistenteIndex >= 0){
      this.recados.splice(recadoExistenteIndex, 1);
    }
  }

}