import { Filme, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


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
