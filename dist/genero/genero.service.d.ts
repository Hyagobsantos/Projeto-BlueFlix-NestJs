import { genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<genero[]>;
    getId(where: Prisma.generoWhereUniqueInput): Promise<genero>;
    create(data: Prisma.generoCreateInput): Promise<genero>;
    updataOne(generoId: number, data: Prisma.generoCreateInput): Promise<genero>;
    deleteOneFilme(where: Prisma.generoWhereUniqueInput): Promise<genero>;
}
