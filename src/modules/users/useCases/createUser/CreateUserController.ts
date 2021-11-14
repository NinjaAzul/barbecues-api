import { Request, Response } from 'express';

import CreateUserService from './CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await CreateUserService.execute({
      email,
      password,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
