import { Filme, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { Participante } from 'src/participante/entities/participante.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}


  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async getId(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.findUnique({ where })
  }

  async create(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async updataOne(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId
      },
    });
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({where})
  }
 
}
