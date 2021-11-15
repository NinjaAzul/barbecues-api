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
class AuthenticateUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prismaClient.users.findFirst({
                where: {
                    email,
                },
            });
            if (!user) {
                throw new AppError_1.AppError('Email or password incorrect', 401);
            }
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new AppError_1.AppError('Email or password incorrect', 401);
            }
            delete user.password;
            const token = (0, jsonwebtoken_1.sign)({}, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: '1d',
            });
            const tokenReturn = {
                token,
                user,
            };
            return tokenReturn;
        });
    }
}
exports.default = new AuthenticateUserService();
