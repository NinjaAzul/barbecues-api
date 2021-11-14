import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { participantsrRoutes } from './participants.routes';
import { shedulesRoutes } from './schedules.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/schedule', shedulesRoutes);
routes.use('/participants', participantsrRoutes);
routes.use(authRoutes);

export { routes };
