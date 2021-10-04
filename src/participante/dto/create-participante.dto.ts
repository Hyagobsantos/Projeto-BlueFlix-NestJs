import {IsNotEmpty, IsOptional} from 'class-validator'

export class CreateParticipanteDto {

  @IsNotEmpty()
  nome: String

  @IsOptional()
  imagem: String
  data_nascimento: String
  staff: String
  filmeId: number
}
