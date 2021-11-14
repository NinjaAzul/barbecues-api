import { Request, Response } from 'express';

import UpdateParticipantsServices from './UpdateParticipantsServices';

class UpdateParticipantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, contribution, isConfirmated } = req.body;

    const participants = await UpdateParticipantsServices.execute({
      id,
      name,
      contribution,
      isConfirmated,
    });

    return res
      .status(200)
      .json({ message: 'atualizado com sucesso!', participants });
  }
}

export { UpdateParticipantsController };
