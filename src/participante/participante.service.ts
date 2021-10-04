import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { Participantes, Prisma } from '.prisma/client';

@Injectable()
export class ParticipanteService {

  constructor(private prisma:PrismaService){}

  async findAll(): Promise<Participantes[]> {
    return this.prisma.participantes.findMany()
  }

  async findOne(participanteId: number): Promise<Participantes>{
    return this.prisma.participantes.findUnique({
      where: {
        id: participanteId
      }
    })
  }

  async create(data: Prisma.ParticipantesCreateInput): Promise<Participantes> {
    return this.prisma.participantes.create({ data }) 
  }

  async update(participanteId: number, data:Prisma.ParticipantesCreateInput): Promise<Participantes> {
    return this.prisma.participantes.update({
      data,
      where: {
        id: participanteId
      },
    })
  }

  async remove(where: Prisma.ParticipantesWhereUniqueInput):Promise<Participantes> {
    return this.prisma.participantes.delete({where})
  }
}
