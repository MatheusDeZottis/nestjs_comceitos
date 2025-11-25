import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('recados')


export class RecadosController {
    @Get()
    findAll() {
        return "essa rota retorna todos os recados"
    }

    @Get()
    findOne(@Param("id") id: string) {
        return `Essa rota retorna o recado ID ${id}`
    }
    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body()body: any) {
        return body
    }

    @Post(':id')
    update(@Param() id: string, @Body() body: any) {
        return {
            id,
            ...body
        }
    }

}