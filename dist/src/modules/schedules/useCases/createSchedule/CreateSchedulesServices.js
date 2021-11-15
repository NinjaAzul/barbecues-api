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
const prisma_1 = require("../../../../shared/prisma");
class CreateScheduleService {
    execute({ data, no_drink, user_id, title, with_drink }) {
        return __awaiter(this, void 0, void 0, function* () {
            const schedule = yield prisma_1.prismaClient.schedules.create({
                data: {
                    data,
                    no_drink,
                    user_id,
                    title,
                    with_drink,
                },
            });
            return { schedule };
        });
    }
}
exports.default = new CreateScheduleService();
