import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Filme[]>;
    getId(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    create(data: Prisma.FilmeCreateInput): Promise<Filme>;
    updataOne(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
}
