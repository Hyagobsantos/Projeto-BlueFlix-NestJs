import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    getAll(): Promise<filme[]>;
    getId(id: number): Promise<filme>;
    create(createFilme: CreateFilmeDto): Promise<filme>;
    update(updateFilme: CreateFilmeDto, id: number): Promise<filme>;
    delete(id: string): Promise<filme>;
}
