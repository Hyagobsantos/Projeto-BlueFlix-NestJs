import { PrismaService } from 'src/prisma/prisma.service';
import { Participantes, Prisma } from '.prisma/client';
export declare class ParticipanteService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Participantes[]>;
    findOne(participanteId: number): Promise<Participantes>;
    create(data: Prisma.ParticipantesCreateInput): Promise<Participantes>;
    update(participanteId: number, data: Prisma.ParticipantesCreateInput): Promise<Participantes>;
    remove(where: Prisma.ParticipantesWhereUniqueInput): Promise<Participantes>;
}
