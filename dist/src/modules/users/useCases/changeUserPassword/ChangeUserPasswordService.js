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
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("../../../../shared/errors/AppError");
const prisma_1 = require("../../../../shared/prisma");
class ChangeUserPasswordService {
    execute(id, current_password, new_password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield prisma_1.prismaClient.users.findFirst({
                where: { id },
            });
            if (!userExists) {
                throw new AppError_1.AppError('User not found', 404);
            }
            const isPasswordValid = yield (0, bcryptjs_1.compare)(current_password, userExists.password);
            if (!isPasswordValid) {
                throw new AppError_1.AppError('Invalid password', 401);
            }
            const hashedPassword = yield (0, bcryptjs_1.hash)(new_password, 8);
            yield prisma_1.prismaClient.users.update({
                where: { id },
                data: {
                    password: hashedPassword,
                },
            });
        });
    }
}
exports.default = new ChangeUserPasswordService();
