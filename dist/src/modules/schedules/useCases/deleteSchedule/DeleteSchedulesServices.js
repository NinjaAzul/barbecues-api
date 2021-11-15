"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../../../../shared/errors/AppError");
const prisma_1 = require("../../../../shared/prisma");
class DeleteSchedulesService {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const SchedulesExist = yield prisma_1.prismaClient.schedules.findUnique({
                where: { id },
            });
            if (!SchedulesExist) {
                throw new AppError_1.AppError('agendamento não encontrado!', 404);
            }
            yield prisma_1.prismaClient.schedules.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = new DeleteSchedulesService();
