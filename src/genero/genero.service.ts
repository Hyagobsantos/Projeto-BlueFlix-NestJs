import { Genero, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async getId(where: Prisma.FilmeWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.findUnique({ where })
  }

  async create(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async updataOne(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId
      },
    });
  }

  async deleteOneFilme(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({where})
  }
}
