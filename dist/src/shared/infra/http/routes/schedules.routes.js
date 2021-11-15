"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shedulesRoutes = void 0;
const express_1 = require("express");
// Controllers
const CreateSchedulesController_1 = require("../../../../modules/schedules/useCases/createSchedule/CreateSchedulesController");
const DeteleSchedulesController_1 = require("../../../../modules/schedules/useCases/deleteSchedule/DeteleSchedulesController");
const FindSchedulesController_1 = require("../../../../modules/schedules/useCases/findSchedule/FindSchedulesController");
const ListSchedulesController_1 = require("../../../../modules/schedules/useCases/listSchedule/ListSchedulesController");
const UpdateSchedulesController_1 = require("../../../../modules/schedules/useCases/updateSchedule/UpdateSchedulesController");
// Middlewares
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
// New Instances Controllers
const createScheduleController = new CreateSchedulesController_1.CreateScheduleController();
const listScheduleController = new ListSchedulesController_1.ListScheduleController();
const deleteSchedulesController = new DeteleSchedulesController_1.DeleteSchedulesController();
const updateSchedulesController = new UpdateSchedulesController_1.UpdateSchedulesController();
const findScheduleController = new FindSchedulesController_1.FindScheduleController();
// Routes
const shedulesRoutes = (0, express_1.Router)();
exports.shedulesRoutes = shedulesRoutes;
shedulesRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, createScheduleController.handle);
shedulesRoutes.get('/', ensureAuthenticated_1.ensureAuthenticated, listScheduleController.handle);
shedulesRoutes.get('/:id', ensureAuthenticated_1.ensureAuthenticated, findScheduleController.handle);
shedulesRoutes.delete('/:id', ensureAuthenticated_1.ensureAuthenticated, deleteSchedulesController.handle);
shedulesRoutes.put('/:id', ensureAuthenticated_1.ensureAuthenticated, updateSchedulesController.handle);
