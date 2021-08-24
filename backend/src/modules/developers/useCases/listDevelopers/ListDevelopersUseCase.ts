import { inject, injectable } from "tsyringe";

import { Developer } from "@modules/developers/infra/typeorm/entities/Developer";
import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";

@injectable()
class ListDevelopersUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute(page = 1, limit = 10): Promise<Developer[]> {
    const developers = this.developersRepository.list(page, limit);

    return developers;
  }
}

export { ListDevelopersUseCase };
