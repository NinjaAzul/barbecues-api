import { prismaClient } from '../../../../shared/prisma';

type Schedules = {
  user_id: string;
};

class ListScheduleService {
  async execute({ user_id }: Schedules) {
    const schedule = await prismaClient.schedules.findMany({
      where: { user_id },
      include: {
        participants: true,
      },
    });
    return { schedule };
  }
}

export default new ListScheduleService();
