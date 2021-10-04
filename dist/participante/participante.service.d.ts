import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipanteService {
    create(createParticipanteDto: CreateParticipanteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateParticipanteDto: UpdateParticipanteDto): string;
    remove(id: number): string;
}
