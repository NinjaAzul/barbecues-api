import { prismaClient } from '../../../../shared/prisma';

class ListParticipantsService {
  async execute() {
    const participants = await prismaClient.participants.findMany({});
    return { participants };
  }
}

export default new ListParticipantsService();
