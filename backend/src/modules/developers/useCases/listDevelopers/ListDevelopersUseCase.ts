import { inject, injectable } from "tsyringe";

import { Developer } from "@modules/developers/infra/typeorm/entities/Developer";
import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";

@injectable()
class ListDevelopersUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute(
    page = 1,
    limit = 10,
    search_type?: string,
    search_value?: string,
  ): Promise<Developer[]> {
    const developers = this.developersRepository.list(
      page,
      limit,
      search_type,
      search_value,
    );

    return developers;
  }
}

export { ListDevelopersUseCase };
