import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

interface IRequest {
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, password }: IRequest) {
    const userExists = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new AppError('User already exists', 400);
    }

    const hashPassword = await hash(password, 8);

    const user = await prismaClient.users.create({
      data: {
        email,
        password: hashPassword,
      },
      select: {
        id: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '30d',
    });

    return { token, user };
  }
}

export default new CreateUserService();
