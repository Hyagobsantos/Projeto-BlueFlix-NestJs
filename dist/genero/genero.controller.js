"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneroController = void 0;
const common_1 = require("@nestjs/common");
const genero_service_1 = require("./genero.service");
const create_genero_dto_1 = require("./dto/create-genero.dto");
let GeneroController = class GeneroController {
    constructor(generoService) {
        this.generoService = generoService;
    }
    async getAll() {
        return this.generoService.getAll();
    }
    async getId(id) {
        return this.generoService.getId({ id: Number(id) });
    }
    async create(createGenero) {
        return this.generoService.create(createGenero);
    }
    async update(updategenero, id) {
        return this.generoService.updataOne(id, updategenero);
    }
    async delete(id) {
        return this.generoService.deleteOneFilme({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/list/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "getId", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genero_dto_1.CreateGeneroDto, Number]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "delete", null);
GeneroController = __decorate([
    (0, common_1.Controller)('genero'),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map