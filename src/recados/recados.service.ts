import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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
  
  throwNotFoundErro(){
    throw new HttpException("Recado Não emcotrado", HttpStatus.NOT_FOUND);
  }
  
  findOne(id: string){
    const recado = this.recados.find(item => item.id === +id)

    if (recado) return recado;
    
    this.throwNotFoundErro();
  
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
    if ( recadoExistenteIndex <= 0){
      this.throwNotFoundErro()
    }

      const recadoExistente = this.recados[recadoExistenteIndex];
      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
    }
  }

  remove(id: string){
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    if(recadoExistenteIndex <= 0){
      this.throwNotFoundErro()
    }
    
    const recado = this.recados[recadoExistenteIndex]
      
    this.recados.splice(recadoExistenteIndex, 1);
      
      return recado
    }
  }

