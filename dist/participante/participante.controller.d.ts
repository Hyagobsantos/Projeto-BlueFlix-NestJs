import { ParticipanteService } from './participante.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { participantes } from '.prisma/client';
export declare class ParticipanteController {
    private participanteService;
    constructor(participanteService: ParticipanteService);
    findAll(): Promise<participantes[]>;
    findOne(id: number): Promise<participantes>;
    create(createParticipante: CreateParticipanteDto): Promise<participantes>;
    update(createParticipante: CreateParticipanteDto, id: number): Promise<participantes>;
    delete(id: string): Promise<participantes>;
}
