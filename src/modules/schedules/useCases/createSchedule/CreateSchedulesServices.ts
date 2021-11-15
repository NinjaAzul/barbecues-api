import { prismaClient } from '../../../../shared/prisma';

type IRequest = {
  user_id: string;
  data: Date;
  no_drink: number;
  with_drink: number;
  title: string;
};

class CreateScheduleService {
  async execute({ data, no_drink, user_id, title, with_drink }: IRequest) {
    const schedule = await prismaClient.schedules.create({
      data: {
        data,
        no_drink,
        user_id,
        title,
        with_drink,
      },
    });

    return { schedule };
  }
}

export default new CreateScheduleService();
