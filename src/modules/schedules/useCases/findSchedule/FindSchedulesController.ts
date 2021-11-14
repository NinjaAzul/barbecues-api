import { Request, Response } from 'express';

import FindScheduleService from './FindSchedulesService';

class FindScheduleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const schedule = await FindScheduleService.execute({
      id,
    });
    return res.status(200).json(schedule);
  }
}

export { FindScheduleController };
