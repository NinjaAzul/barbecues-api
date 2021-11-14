import { Router } from 'express';

// Controllers
import { CreateScheduleController } from '@modules/schedules/useCases/createSchedule/CreateSchedulesController';
import { DeleteSchedulesController } from '@modules/schedules/useCases/deleteSchedule/DeteleSchedulesController';
import { FindScheduleController } from '@modules/schedules/useCases/findSchedule/FindSchedulesController';
import { ListScheduleController } from '@modules/schedules/useCases/listSchedule/ListSchedulesController';
import { UpdateSchedulesController } from '@modules/schedules/useCases/updateSchedule/UpdateSchedulesController';

// Middlewares
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
// New Instances Controllers
const createScheduleController = new CreateScheduleController();
const listScheduleController = new ListScheduleController();
const deleteSchedulesController = new DeleteSchedulesController();
const updateSchedulesController = new UpdateSchedulesController();
const findScheduleController = new FindScheduleController();
// Routes
const shedulesRoutes = Router();

shedulesRoutes.post('/', ensureAuthenticated, createScheduleController.handle);
shedulesRoutes.get('/', ensureAuthenticated, listScheduleController.handle);
shedulesRoutes.get('/:id', ensureAuthenticated, findScheduleController.handle);
shedulesRoutes.delete(
  '/:id',
  ensureAuthenticated,
  deleteSchedulesController.handle
);
shedulesRoutes.put(
  '/:id',
  ensureAuthenticated,
  updateSchedulesController.handle
);

export { shedulesRoutes };
