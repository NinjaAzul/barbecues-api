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
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../errors/AppError");
const prisma_1 = require("../../../prisma");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ensureAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.AppError('Token not provided', 401);
        }
        const [, token] = authHeader.split(' ');
        try {
            const { sub: id } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
            const user = yield prisma_1.prismaClient.users.findFirst({
                where: {
                    id,
                },
                select: {
                    id: true,
                    updated_at: true,
                    email: true,
                    created_at: true,
                },
            });
            if (!user)
                throw new AppError_1.AppError('User does not exists!', 404);
            req.user = user;
            req.token = token;
            next();
        }
        catch (_a) {
            throw new AppError_1.AppError('Invalid token!', 401);
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
