import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { participantes, Prisma } from '.prisma/client';

@Injectable()
export class ParticipanteService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<participantes[]> {
    return this.prisma.participantes.findMany();
  }

  async findOne(participanteId: number): Promise<participantes> {
    return this.prisma.participantes.findUnique({
      where: {
        id: participanteId,
      },
    });
  }

  async create(data: Prisma.participantesCreateInput): Promise<participantes> {
    return this.prisma.participantes.create({ data });
  }

  async update(
    participanteId: number,
    data: Prisma.participantesCreateInput,
  ): Promise<participantes> {
    return this.prisma.participantes.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }

  async remove(
    where: Prisma.participantesWhereUniqueInput,
  ): Promise<participantes> {
    return this.prisma.participantes.delete({ where });
  }
}
