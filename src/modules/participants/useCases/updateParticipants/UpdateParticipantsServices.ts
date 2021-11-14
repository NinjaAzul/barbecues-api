// import { AppError } from '@shared/errors/AppError';
import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

type IRequest = {
  id: string;
  name: string;
  contribution: number;
  isConfirmated: boolean;
};

class UpdateParticipantsService {
  async execute({ id, name, contribution, isConfirmated }: IRequest) {
    const participantsExist = await prismaClient.participants.findUnique({
      where: { id },
    });

    if (!participantsExist) {
      throw new AppError('participante não encontrado!', 404);
    }

    const participants = await prismaClient.participants.update({
      where: {
        id,
      },
      data: {
        name,
        contribution,
        isConfirmated,
      },
    });

    return participants;
  }
}

export default new UpdateParticipantsService();
