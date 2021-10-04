import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  nome: String;

  @IsOptional()
  filmeId: number;
}
