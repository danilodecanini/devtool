import { inject, injectable } from "tsyringe";

import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";
import { ApplicationError } from "@shared/errors/ApplicationError";

interface IRequest {
  developerUuid: string;
}

@injectable()
class DeleteDeveloperUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute({ developerUuid }: IRequest): Promise<void> {
    const developer = await this.developersRepository.findByUuid(developerUuid);

    if (!developer) {
      throw new ApplicationError("Developer not found", 404);
    }

    await this.developersRepository.delete(developer);
  }
}

export { DeleteDeveloperUseCase };
