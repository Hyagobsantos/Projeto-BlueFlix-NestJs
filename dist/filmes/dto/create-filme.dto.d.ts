import { Prisma } from '@prisma/client';
export declare class CreateFilmeDto {
    nome: string;
    imagem: string;
    data_lancamento: string;
    duracao: number;
    genero: Prisma.generoCreateNestedManyWithoutFilmeInput;
    participantes: Prisma.participantesCreateNestedManyWithoutFilmeInput;
}
