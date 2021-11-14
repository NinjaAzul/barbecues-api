// import { AppError } from '@shared/errors/AppError';
import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

type IRequest = {
  id: string;
  title: string;
  data: Date;
  with_drink: number;
  no_drink: number;
  total_money: number;
  total_peaple: number;
};

class UpdateSchedulesService {
  async execute({
    id,
    title,
    data,
    with_drink,
    no_drink,
    total_money,
    total_peaple,
  }: IRequest) {
    const SchedulesExist = await prismaClient.schedules.findUnique({
      where: { id },
    });

    if (!SchedulesExist) {
      throw new AppError('agendamento não encontrado!', 404);
    }

    const Schedules = await prismaClient.schedules.update({
      where: {
        id,
      },
      data: {
        title,
        data,
        with_drink,
        no_drink,
        total_money,
        total_peaple,
      },
    });

    return Schedules;
  }
}

export default new UpdateSchedulesService();
