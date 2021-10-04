import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    getAll(): Promise<Filme[]>;
    getId(id: string): Promise<Filme>;
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    update(updateFilme: CreateFilmeDto, id: number): Promise<Filme>;
    delete(id: string): Promise<Filme>;
}
