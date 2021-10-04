import { genero, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<genero[]> {
    return this.prisma.genero.findMany();
  }

  async getId(where: Prisma.generoWhereUniqueInput): Promise<genero> {
    return this.prisma.genero.findUnique({ where });
  }

  async create(data: Prisma.generoCreateInput): Promise<genero> {
    return this.prisma.genero.create({ data });
  }

  async updataOne(
    generoId: number,
    data: Prisma.generoCreateInput,
  ): Promise<genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }

  async deleteOneFilme(where: Prisma.generoWhereUniqueInput): Promise<genero> {
    const user = this.prisma.genero.delete({ where });
    return user;
  }
}
