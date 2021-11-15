import { prismaClient } from '../../../../shared/prisma';

import { Participants } from '.prisma/client';

type IRequest = Participants;

class CreateParticipantsService {
  async execute(data: IRequest) {
    const schedule = await prismaClient.participants.create({
      data: {
        ...data,
      },
    });

    return { schedule };
  }
}

export default new CreateParticipantsService();
