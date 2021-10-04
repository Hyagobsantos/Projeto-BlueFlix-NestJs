import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';


export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: string;

  @IsNotEmpty()
  duracao: number;
  
  @IsOptional()
  genero: Prisma.generoCreateNestedManyWithoutFilmeInput;

  @IsOptional()
  participantes: Prisma.participantesCreateNestedManyWithoutFilmeInput;
}
