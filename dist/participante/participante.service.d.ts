import { PrismaService } from 'src/prisma/prisma.service';
import { participantes, Prisma } from '.prisma/client';
export declare class ParticipanteService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<participantes[]>;
    findOne(participanteId: number): Promise<participantes>;
    create(data: Prisma.participantesCreateInput): Promise<participantes>;
    update(participanteId: number, data: Prisma.participantesCreateInput): Promise<participantes>;
    remove(where: Prisma.participantesWhereUniqueInput): Promise<participantes>;
}
