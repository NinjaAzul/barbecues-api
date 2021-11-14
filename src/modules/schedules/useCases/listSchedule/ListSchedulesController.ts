import { Request, Response } from 'express';

import ListScheduleService from './ListSchedulesServices';

class ListScheduleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req;
    const schedule = await ListScheduleService.execute({
      user_id: user.id,
    });
    return res.status(200).json(schedule);
  }
}

export { ListScheduleController };
