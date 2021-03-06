import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe,UsePipes,ParseIntPipe, Put, } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { genero } from '.prisma/client';

@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async getAll() {
    return this.generoService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async getId(@Param('id') id: string) {
    return this.generoService.getId({ id: Number(id) });
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<genero> {
    return this.generoService.create(createGenero);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(@Body() updategenero: CreateGeneroDto, @Param('id', ParseIntPipe) id:number): Promise<genero> {
    return this.generoService.updataOne(id, updategenero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generoService.deleteOneFilme({ id: Number(id) });
  }
}
