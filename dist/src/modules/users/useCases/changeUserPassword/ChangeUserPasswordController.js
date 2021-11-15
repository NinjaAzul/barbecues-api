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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeUserPasswordController = void 0;
const ChangeUserPasswordService_1 = __importDefault(require("./ChangeUserPasswordService"));
class ChangeUserPasswordController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user: { id }, } = req;
            const { current_password, new_password } = req.body;
            yield ChangeUserPasswordService_1.default.execute(id, current_password, new_password);
            return res
                .status(200)
                .json({ message: 'Your password has been updated successfully' });
        });
    }
}
exports.ChangeUserPasswordController = ChangeUserPasswordController;
