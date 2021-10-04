import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from '.prisma/client';
export declare class GeneroController {
    private generoService;
    constructor(generoService: GeneroService);
    getAll(): Promise<Genero[]>;
    getId(id: string): Promise<Genero>;
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    update(updategenero: CreateGeneroDto, id: number): Promise<Genero>;
    delete(id: string): Promise<Genero>;
}
