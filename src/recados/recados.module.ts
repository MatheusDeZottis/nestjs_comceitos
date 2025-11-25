import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';

@Module({
    controllers: [RecadosController],
    providers: []
})

export class RecadosModule {

}
