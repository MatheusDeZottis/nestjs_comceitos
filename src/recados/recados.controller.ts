import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService){}
  @Get()
  findAll() {
    return 'essa rota retorna todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return /* `Essa rota retorna o recado ID ${id}`; */ this.recadosService.findOne(id)
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o recado ID ${id}`;
  }
}
