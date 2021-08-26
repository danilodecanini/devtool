import { Developer } from "../infra/typeorm/entities/Developer";

interface ICreateDeveloperDTO {
  nome: string;
  sexo: number;
  idade: number;
  hobby: string;
  datanascimento: string;
}

interface IUpdateDeveloperDTO {
  nome?: string;
  sexo?: number;
  idade?: number;
  hobby?: string;
  datanascimento?: string;
}

interface IDevelopersRepository {
  create({
    nome,
    idade,
    sexo,
    hobby,
    datanascimento,
  }: ICreateDeveloperDTO): Promise<void>;
  list(
    page: number,
    limit: number,
    search_type?: string,
    search_value?: string,
  ): Promise<Developer[]>;
  findByUuid(uuid: string): Promise<Developer>;
  update(developerUuid: string, developer: IUpdateDeveloperDTO): Promise<void>;
  delete(developer: Developer): Promise<void>;
}

export { IDevelopersRepository, ICreateDeveloperDTO, IUpdateDeveloperDTO };
