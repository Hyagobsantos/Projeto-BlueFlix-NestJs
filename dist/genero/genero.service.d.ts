import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Genero[]>;
    getId(where: Prisma.FilmeWhereUniqueInput): Promise<Genero>;
    create(data: Prisma.GeneroCreateInput): Promise<Genero>;
    updataOne(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
    deleteOneFilme(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
}
