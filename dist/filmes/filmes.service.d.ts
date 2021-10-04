import { filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<filme[]>;
    getId(id: number): Promise<filme>;
    create(data: Prisma.filmeCreateInput): Promise<filme>;
    updataOne(filmeId: number, data: Prisma.filmeCreateInput): Promise<filme>;
    deleteOneFilme(where: Prisma.filmeWhereUniqueInput): Promise<filme>;
}
