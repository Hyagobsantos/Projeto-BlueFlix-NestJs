import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe,UsePipes,ParseIntPipe, Put} from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { participantes } from '.prisma/client';

@Controller('participante')
export class ParticipanteController {
  constructor(private participanteService: ParticipanteService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll() {
    return this.participanteService.findAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: number) {
    return this.participanteService.findOne(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async create(@Body() createParticipante: CreateParticipanteDto):Promise<participantes> {
    return this.participanteService.create(createParticipante);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(@Body() createParticipante: CreateParticipanteDto, @Param('id', ParseIntPipe) id:number): Promise<participantes> {
    return this.participanteService.update(id, createParticipante);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participanteService.remove({ id: Number(id) });
  }
}
