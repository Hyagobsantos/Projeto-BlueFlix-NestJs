import { filme, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}


  async getAll(): Promise<filme[]> {
    return this.prisma.filme.findMany({
      include: {
        participantes: {
          select: {
            nome: true,
            imagem: true,
            data_nascimento: true,
            staff: true
          },
        },
        genero: {
          select: {
            nome: true,
          }
        }
      }
    });
  }

  async getId(id: number): Promise<filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: id,
      },
      include: {
        participantes: {
          select: {
            nome: true,
            imagem: true,
            data_nascimento: true,
            staff: true
          },
        },
        genero: {
          select: {
            nome: true
          }
        }
      }
    })
  }

  async create(data: Prisma.filmeCreateInput): Promise<filme> {
    return this.prisma.filme.create({ data });
  }

  async updataOne(filmeId: number, data: Prisma.filmeCreateInput): Promise<filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId
      },
    });
  }

  async deleteOneFilme(where: Prisma.filmeWhereUniqueInput): Promise<filme> {
    return this.prisma.filme.delete({where})
  }
 
}
