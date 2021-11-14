import { Request, Response } from 'express';

import ListParticipantsServices from './ListParticipantsServices';

class LisParticipantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const participants = await ListParticipantsServices.execute();
    return res.status(200).json(participants);
  }
}

export { LisParticipantsController };
