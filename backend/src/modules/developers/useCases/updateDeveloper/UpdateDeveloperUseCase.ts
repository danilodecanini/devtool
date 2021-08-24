import { inject, injectable } from "tsyringe";

import {
  IDevelopersRepository,
  IUpdateDeveloperDTO,
} from "@modules/developers/repositories/IDevelopersRepository";

@injectable()
class UpdateDeveloperUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute(
    developerUuid: string,
    info: IUpdateDeveloperDTO,
  ): Promise<void> {
    await this.developersRepository.update(developerUuid, info);
  }
}

export { UpdateDeveloperUseCase };
