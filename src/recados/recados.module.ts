import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecadoEntity } from './entities/recado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecadoEntity])],
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class RecadosModule {}

// CRUD

// Create --> GET --> Cria um recado
// Read --> GET  --> Ler todos os recados
// Update --> PATCH / PUT --> Atualizar um recado
// Delete --> DELETE --> Apagar um recado

// path
