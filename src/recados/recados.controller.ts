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
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './DTO/create-recado.dto';
import { UpdateRecadoDto } from './DTO/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) { }
  @Get()
 async findAll(@Query() pagination: any) {
     const { limit = 10, offset = 0 } = pagination;
      // return `Retorna todos os recados. Limit=${limit}, Offset=${offset}.`;
      const recados = await this.recadosService.findAll();
      return recados;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return  this.recadosService.findOne(id)
  }
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createRecado: CreateRecadoDto) {
    return this.recadosService.create(createRecado);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecado: UpdateRecadoDto) {
   return this.recadosService.update(id, updateRecado)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recadosService.remove(id)
  }
}
