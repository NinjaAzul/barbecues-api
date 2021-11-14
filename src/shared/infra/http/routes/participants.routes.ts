import { Router } from 'express';

// Controllers
import { CreateParticipantsController } from '@modules/participants/useCases/createParticipants/CreateParticipantsController';
import { DeleteParticipantsController } from '@modules/participants/useCases/deleteParticipants/DeteleParticipantsController';
import { LisParticipantsController } from '@modules/participants/useCases/listParticipants/ListParticipantsController';
import { UpdateParticipantsController } from '@modules/participants/useCases/updateParticipants/UpdateParticipantsController';

// Middlewares
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
// New Instances Controllers
const createParticipantsController = new CreateParticipantsController();
const listParticipantsController = new LisParticipantsController();
const deleteParticipantsController = new DeleteParticipantsController();
const updateParticipantsController = new UpdateParticipantsController();
// Routes
const participantsrRoutes = Router();

participantsrRoutes.post(
  '/',
  ensureAuthenticated,
  createParticipantsController.handle
);
participantsrRoutes.delete(
  '/:id',
  ensureAuthenticated,
  deleteParticipantsController.handle
);
participantsrRoutes.put(
  '/:id',
  ensureAuthenticated,
  updateParticipantsController.handle
);
participantsrRoutes.get(
  '/',
  ensureAuthenticated,
  listParticipantsController.handle
);

export { participantsrRoutes };
