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
exports.CreateScheduleController = void 0;
const CreateSchedulesServices_1 = __importDefault(require("./CreateSchedulesServices"));
class CreateScheduleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, no_drink, user_id, title, with_drink } = req.body;
            const { user } = req;
            const schedule = yield CreateSchedulesServices_1.default.execute({
                data,
                no_drink,
                user_id: user.id,
                title,
                with_drink,
            });
            return res.status(201).json(schedule);
        });
    }
}
exports.CreateScheduleController = CreateScheduleController;
