import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  getAll() {
    return this.filmesService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  getId(@Param('id') id: string) {
    return this.filmesService.getId({ id: Number(id) });
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.create(createFilme);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(@Body() updateFilme: CreateFilmeDto, @Param('id', ParseIntPipe) id:number): Promise<Filme> {
    return this.filmesService.updataOne(id, updateFilme);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.filmesService.deleteOneFilme({ id: Number(id) });
  }
}
