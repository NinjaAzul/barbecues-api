"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participantsrRoutes = void 0;
const express_1 = require("express");
// Controllers
const CreateParticipantsController_1 = require("../../../../modules/participants/useCases/createParticipants/CreateParticipantsController");
const DeteleParticipantsController_1 = require("../../../../modules/participants/useCases/deleteParticipants/DeteleParticipantsController");
const ListParticipantsController_1 = require("../../../../modules/participants/useCases/listParticipants/ListParticipantsController");
const UpdateParticipantsController_1 = require("../../../../modules/participants/useCases/updateParticipants/UpdateParticipantsController");
// Middlewares
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
// New Instances Controllers
const createParticipantsController = new CreateParticipantsController_1.CreateParticipantsController();
const listParticipantsController = new ListParticipantsController_1.LisParticipantsController();
const deleteParticipantsController = new DeteleParticipantsController_1.DeleteParticipantsController();
const updateParticipantsController = new UpdateParticipantsController_1.UpdateParticipantsController();
// Routes
const participantsrRoutes = (0, express_1.Router)();
exports.participantsrRoutes = participantsrRoutes;
participantsrRoutes.post('/', ensureAuthenticated_1.ensureAuthenticated, createParticipantsController.handle);
participantsrRoutes.delete('/:id', ensureAuthenticated_1.ensureAuthenticated, deleteParticipantsController.handle);
participantsrRoutes.put('/:id', ensureAuthenticated_1.ensureAuthenticated, updateParticipantsController.handle);
participantsrRoutes.get('/', ensureAuthenticated_1.ensureAuthenticated, listParticipantsController.handle);
