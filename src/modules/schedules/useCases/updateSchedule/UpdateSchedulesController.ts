import { Request, Response } from 'express';

import UpdateSchedulesServices from './UpdateSchedulesServices';

class UpdateSchedulesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, data, with_drink, no_drink, total_money, total_peaple } =
      req.body;

    const schedules = await UpdateSchedulesServices.execute({
      id,
      title,
      data,
      with_drink,
      no_drink,
      total_money,
      total_peaple,
    });

    return res
      .status(200)
      .json({ message: 'atualizado com sucesso!', schedules });
  }
}

export { UpdateSchedulesController };
