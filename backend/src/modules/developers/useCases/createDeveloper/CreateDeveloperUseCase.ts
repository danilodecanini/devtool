import { inject, injectable } from "tsyringe";

import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";

interface IRequest {
  nome: string;
  idade: number;
  sexo: number;
  hobby: string;
  datanascimento: string;
}

@injectable()
class CreateDeveloperUseCase {
  constructor(
    @inject("DevelopersRepository")
    private developersRepository: IDevelopersRepository,
  ) { }

  async execute({
    nome,
    idade,
    sexo,
    hobby,
    datanascimento,
  }: IRequest): Promise<void> {
    await this.developersRepository.create({
      nome,
      idade,
      sexo,
      hobby,
      datanascimento,
    });
  }
}

export { CreateDeveloperUseCase };
