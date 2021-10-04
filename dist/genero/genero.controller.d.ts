import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { genero } from '.prisma/client';
export declare class GeneroController {
    private generoService;
    constructor(generoService: GeneroService);
    getAll(): Promise<genero[]>;
    getId(id: string): Promise<genero>;
    create(createGenero: CreateGeneroDto): Promise<genero>;
    update(updategenero: CreateGeneroDto, id: number): Promise<genero>;
    delete(id: string): Promise<genero>;
}
