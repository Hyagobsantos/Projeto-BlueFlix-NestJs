import {IsNotEmpty, IsOptional} from 'class-validator'

export class CreateParticipanteDto {

  @IsNotEmpty()
  nome: string

  @IsOptional()
  imagem: string
  data_nascimento: string
  staff: string
  filmeId: number
}
