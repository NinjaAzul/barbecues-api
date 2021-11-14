import { Request, Response } from 'express';

import DeleteSchedulesServices from './DeleteSchedulesServices';

class DeleteSchedulesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await DeleteSchedulesServices.execute({ id });
    return res.status(200).json({ message: 'deletado com sucesso!' });
  }
}

export { DeleteSchedulesController };
