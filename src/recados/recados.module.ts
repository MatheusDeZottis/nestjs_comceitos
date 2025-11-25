import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';

@Module({
    controllers: [RecadosController],
    providers: []
})

export class RecadosModule {

}

// CRUD

// Create --> GET --> Cria um recado
// Read --> GET  --> Ler todos os recados
// Update --> PATCH / PUT --> Atualizar um recado
// Delete --> DELETE --> Apagar um recado

// path