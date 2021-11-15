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
exports.UpdateSchedulesController = void 0;
const UpdateSchedulesServices_1 = __importDefault(require("./UpdateSchedulesServices"));
class UpdateSchedulesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, data, with_drink, no_drink, total_money, total_peaple } = req.body;
            const schedules = yield UpdateSchedulesServices_1.default.execute({
                id,
                title,
                data,
                with_drink,
                no_drink,
                total_money,
                total_peaple,
            });
            return res
                .status(200)
                .json({ message: 'atualizado com sucesso!', schedules });
        });
    }
}
exports.UpdateSchedulesController = UpdateSchedulesController;
