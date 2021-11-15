import { prismaClient } from '../../../../shared/prisma';

type Schedules = {
  id: string;
};

class FindScheduleService {
  async execute({ id }: Schedules) {
    const schedule = await prismaClient.schedules.findUnique({
      where: { id },
      include: {
        participants: true,
      },
    });
    return { schedule };
  }
}

export default new FindScheduleService();
