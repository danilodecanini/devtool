import { Developer } from "../infra/typeorm/entities/Developer";

interface ICreateDeveloperDTO {
  nome: string;
  sexo: number;
  idade: number;
  hobby: string;
  datanascimento: string;
}

interface IDevelopersRepository {
  create({
    nome,
    idade,
    sexo,
    hobby,
    datanascimento,
  }: ICreateDeveloperDTO): Promise<void>;
  list(page: number, limit: number): Promise<Developer[]>;
  findByUuid(uuid: string): Promise<Developer>;
}

export { IDevelopersRepository, ICreateDeveloperDTO };
