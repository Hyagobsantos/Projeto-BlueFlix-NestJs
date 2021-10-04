import { Genero } from '.prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Participante } from 'src/participante/entities/participante.entity';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  data_lancamento: string;
  duracao: number;
}
