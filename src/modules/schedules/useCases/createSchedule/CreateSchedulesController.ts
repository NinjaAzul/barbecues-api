import { Request, Response } from 'express';

import CreateUserService from './CreateSchedulesServices';

class CreateScheduleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { data, no_drink, user_id, title, with_drink } = req.body;
    const { user } = req;

    const schedule = await CreateUserService.execute({
      data,
      no_drink,
      user_id: user.id,
      title,
      with_drink,
    });

    return res.status(201).json(schedule);
  }
}

export { CreateScheduleController };
