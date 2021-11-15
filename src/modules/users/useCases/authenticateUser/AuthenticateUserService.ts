import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../shared/errors/AppError';
import { prismaClient } from '../../../../shared/prisma';

import { Users } from '.prisma/client';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: Omit<Users, 'password'>;
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IRequest) {
    const user = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError('Email or password incorrect', 401);
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401);
    }

    delete user.password;

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user,
    };
    return tokenReturn;
  }
}

export default new AuthenticateUserService();
