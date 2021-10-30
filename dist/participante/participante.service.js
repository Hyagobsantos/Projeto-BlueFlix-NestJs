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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipanteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParticipanteService = class ParticipanteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.participantes.findMany();
    }
    async findOne(participanteId) {
        return this.prisma.participantes.findUnique({
            where: {
                id: participanteId,
            },
        });
    }
    async create(data) {
        return this.prisma.participantes.create({ data });
    }
    async update(participanteId, data) {
        return this.prisma.participantes.update({
            data,
            where: {
                id: participanteId,
            },
        });
    }
    async remove(where) {
        return this.prisma.participantes.delete({ where });
    }
};
ParticipanteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParticipanteService);
exports.ParticipanteService = ParticipanteService;
//# sourceMappingURL=participante.service.js.map