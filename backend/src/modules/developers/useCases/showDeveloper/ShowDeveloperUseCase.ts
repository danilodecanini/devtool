import { inject, injectable } from "tsyringe";

import { Developer } from "@modules/developers/infra/typeorm/entities/Developer";
import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";
import { ApplicationError } from "@shared/errors/ApplicationError";

interface IRequest {
  developerUuid: string;
}

@injectable()
class ShowDeveloperUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute({ developerUuid }: IRequest): Promise<Developer> {
    const developer = await this.developersRepository.findByUuid(developerUuid);

    if (!developer) {
      throw new ApplicationError("Developer not found", 404);
    }

    return developer;
  }
}

export { ShowDeveloperUseCase };
