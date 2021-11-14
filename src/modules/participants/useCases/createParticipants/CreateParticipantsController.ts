import { Request, Response } from 'express';

import CreateParticipantsServices from './CreateParticipantsServices';

class CreateParticipantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const schedule = await CreateParticipantsServices.execute({
      ...data,
    });

    return res.status(201).json({ message: 'criado com sucesso', schedule });
  }
}

export { CreateParticipantsController };
