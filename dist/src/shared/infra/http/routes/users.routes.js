"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const ChangeUserPasswordController_1 = require("../../../../modules/users/useCases/changeUserPassword/ChangeUserPasswordController");
const CreateUserController_1 = require("../../../../modules/users/useCases/createUser/CreateUserController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const createUsersController = new CreateUserController_1.CreateUserController();
const changeUserPasswordController = new ChangeUserPasswordController_1.ChangeUserPasswordController();
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/register', createUsersController.handle);
usersRoutes.put('/change-password', ensureAuthenticated_1.ensureAuthenticated, changeUserPasswordController.handle);