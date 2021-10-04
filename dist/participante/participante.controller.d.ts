import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipanteController {
    private readonly participanteService;
    constructor(participanteService: ParticipanteService);
    create(createParticipanteDto: CreateParticipanteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateParticipanteDto: UpdateParticipanteDto): string;
    remove(id: string): string;
}
