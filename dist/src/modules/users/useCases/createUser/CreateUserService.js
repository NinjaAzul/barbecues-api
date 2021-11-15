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
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../shared/errors/AppError");
const prisma_1 = require("../../../../shared/prisma");
class CreateUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield prisma_1.prismaClient.users.findFirst({
                where: {
                    email,
                },
            });
            if (userExists) {
                throw new AppError_1.AppError('User already exists', 400);
            }
            const hashPassword = yield (0, bcryptjs_1.hash)(password, 8);
            const user = yield prisma_1.prismaClient.users.create({
                data: {
                    email,
                    password: hashPassword,
                },
                select: {
                    id: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                },
            });
            const token = (0, jsonwebtoken_1.sign)({}, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: '30d',
            });
            return { token, user };
        });
    }
}
exports.default = new CreateUserService();
