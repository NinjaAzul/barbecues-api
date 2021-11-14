import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

type IRequest = {
  id: string;
};

class DeleteParticipantsService {
  async execute({ id }: IRequest) {
    const participantsExist = await prismaClient.participants.findUnique({
      where: { id },
    });

    if (!participantsExist) {
      throw new AppError('participante não encontrado!', 404);
    }

    await prismaClient.participants.delete({
      where: {
        id,
      },
    });
  }
}

export default new DeleteParticipantsService();
