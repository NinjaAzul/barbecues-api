import { Request, Response } from 'express';

import DeleteParticipantsServices from './DeleteParticipantsServices';

class DeleteParticipantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteParticipantsServices.execute({ id });
    return res.status(200).json({ message: 'deletado com sucesso!' });
  }
}

export { DeleteParticipantsController };
