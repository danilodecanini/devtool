import { Developer } from "@modules/developers/infra/typeorm/entities/Developer";

import {
  ICreateDeveloperDTO,
  IDevelopersRepository,
  IUpdateDeveloperDTO,
} from "../IDevelopersRepository";

class MockDevelopersRepository implements IDevelopersRepository {
  developers: Developer[] = [];

  async create({
    nome,
    idade,
    sexo,
    hobby,
    datanascimento,
  }: ICreateDeveloperDTO): Promise<void> {
    const developer = new Developer();

    Object.assign(developer, {
      nome,
      idade,
      sexo,
      datanascimento,
      hobby,
    });

    this.developers.push(developer);
  }

  async list(page = 1, limit = 1): Promise<Developer[]> {
    const developers = this.developers.slice((page - 1) * limit, page * limit);
    return developers;
  }

  async findByUuid(uuid: string): Promise<Developer> {
    const developer = this.developers.find(developer => developer.id === uuid);

    return developer;
  }

  async update(
    developerId: string,
    developerInfo: IUpdateDeveloperDTO,
  ): Promise<void> {
    const dev = this.developers.find(dev => dev.id === developerId);

    Object.assign(dev, developerInfo);
  }

  async delete(developer: Developer): Promise<void> {
    const developerIndex = this.developers.findIndex(
      dev => dev.id === developer.id,
    );
    this.developers.splice(developerIndex, 1);
  }
}

export { MockDevelopersRepository };
