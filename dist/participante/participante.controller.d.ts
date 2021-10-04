import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participantes } from '.prisma/client';
export declare class ParticipanteController {
    private participanteService;
    constructor(participanteService: ParticipanteService);
    findAll(): Promise<Participantes[]>;
    findOne(id: number): Promise<Participantes>;
    create(createParticipante: CreateParticipanteDto): Promise<Participantes>;
    update(createParticipante: CreateParticipanteDto, id: number): Promise<Participantes>;
    delete(id: string): Promise<Participantes>;
}
