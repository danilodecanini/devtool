import { getRepository, Repository } from "typeorm";

import {
  ICreateDeveloperDTO,
  IDevelopersRepository,
  IUpdateDeveloperDTO,
} from "@modules/developers/repositories/IDevelopersRepository";
import { ApplicationError } from "@shared/errors/ApplicationError";

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

  async list(
    page = 1,
    limit = 1,
    search_type?: string,
    search_value?: string,
  ): Promise<Developer[]> {
    const query = this.repository
      .createQueryBuilder("developer")
      .skip(limit * (page - 1))
      .take(limit)
      .orderBy("developer.created_at", "ASC");

    if (search_value !== "undefined" && search_value !== null) {
      query.where(`${search_value} LIKE :search_type`, {
        search_type: `%${search_type}%`,
      });
    }

    return query.getMany();
  }

  async findByUuid(uuid: string): Promise<Developer> {
    const developer = await this.repository.findOne({
      where: {
        id: uuid,
      },
    });
    return developer;
  }

  async update(
    developerId: string,
    developeData: IUpdateDeveloperDTO,
  ): Promise<void> {
    const developer = await this.repository.findOne({
      where: {
        id: developerId,
      },
    });

    if (!developer) {
      throw new ApplicationError("Developer not found");
    }

    Object.assign(developer, developeData);

    await this.repository.save(developer);
  }

  async delete(developer: Developer): Promise<void> {
    await this.repository.delete(developer);
  }
}

export { DevelopersRepository };
