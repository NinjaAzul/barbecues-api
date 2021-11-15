import { Router } from 'express';

import { ChangeUserPasswordController } from '../../../../modules/users/useCases/changeUserPassword/ChangeUserPasswordController';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUsersController = new CreateUserController();

const changeUserPasswordController = new ChangeUserPasswordController();
const usersRoutes = Router();

usersRoutes.post('/register', createUsersController.handle);
usersRoutes.put(
  '/change-password',
  ensureAuthenticated,
  changeUserPasswordController.handle
);

export { usersRoutes };
