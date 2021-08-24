import { getRepository, Repository } from "typeorm";

import {
  ICreateDeveloperDTO,
  IDevelopersRepository,
} from "@modules/developers/repositories/IDevelopersRepository";

import { Developer } from "../entities/Developer";

class DevelopersRepository implements IDevelopersRepository {
  private repository: Repository<Developer>;

  constructor() {
    this.repository = getRepository(Developer);
  }

  async create({
    nome,
    sexo,
    idade,
    datanascimento,
    hobby,
  }: ICreateDeveloperDTO): Promise<void> {
    const developer = this.repository.create({
      nome,
      sexo,
      hobby,
      idade,
      datanascimento,
    });

    await this.repository.save(developer);
  }

  async list(page = 1, limit = 1): Promise<Developer[]> {
    const developers = await this.repository.find({
      take: limit,
      skip: limit * (page - 1),
      order: {
        created_at: "ASC",
      },
    });
    return developers;
  }

  async findByUuid(uuid: string): Promise<Developer> {
    const developer = await this.repository.findOne({
      where: {
        id: uuid,
      },
    });
    return developer;
  }
}

export { DevelopersRepository };
