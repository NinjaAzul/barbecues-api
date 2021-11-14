import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

type IRequest = {
  id: string;
};

class DeleteSchedulesService {
  async execute({ id }: IRequest) {
    const SchedulesExist = await prismaClient.schedules.findUnique({
      where: { id },
    });

    if (!SchedulesExist) {
      throw new AppError('agendamento não encontrado!', 404);
    }

    await prismaClient.schedules.delete({
      where: {
        id,
      },
    });
  }
}

export default new DeleteSchedulesService();
