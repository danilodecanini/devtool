import { MockDevelopersRepository } from "@modules/developers/repositories/mock/MockDevelopersRepository";

import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase";

let createDeveloperUseCase: CreateDeveloperUseCase;
let mockDevelopersRepository: MockDevelopersRepository;

describe("Create Developer", () => {
  beforeEach(() => {
    mockDevelopersRepository = new MockDevelopersRepository();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      mockDevelopersRepository,
    );
  });

  it("should be able to create a new developer", async () => {
    createDeveloperUseCase.execute({
      nome: "Danilo",
      idade: 25,
      sexo: 1,
      hobby: "play videogames",
      datanascimento: "1996-02-16",
    });

    const developers = await mockDevelopersRepository.list(1, 10);

    expect(developers.length).toBe(1);
  });
});
