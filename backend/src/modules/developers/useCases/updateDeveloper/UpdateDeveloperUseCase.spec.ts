import { MockDevelopersRepository } from "@modules/developers/repositories/mock/MockDevelopersRepository";

import { CreateDeveloperUseCase } from "../createDeveloper/CreateDeveloperUseCase";
import { UpdateDeveloperUseCase } from "./UpdateDeveloperUseCase";

let createDeveloperUseCase: CreateDeveloperUseCase;
let updateDeveloperUseCase: UpdateDeveloperUseCase;
let mockDevelopersRepository: MockDevelopersRepository;

describe("Update Developer", () => {
  beforeEach(() => {
    mockDevelopersRepository = new MockDevelopersRepository();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      mockDevelopersRepository,
    );
    updateDeveloperUseCase = new UpdateDeveloperUseCase(
      mockDevelopersRepository,
    );
  });

  it("should be able to update an existent developer", async () => {
    createDeveloperUseCase.execute({
      nome: "Danilo",
      idade: 25,
      sexo: 1,
      hobby: "play videogames",
      datanascimento: "1996-02-16",
    });

    const developers = await mockDevelopersRepository.list(1, 10);

    const developerUuid = developers[0].id;
    const newInfoAboutDeveloper = {
      nome: "Danilo Henrique",
      idade: 26,
      hobby: "play poker",
    };

    await updateDeveloperUseCase.execute(developerUuid, newInfoAboutDeveloper);

    const newListDevelopers = await mockDevelopersRepository.list(1, 10);

    expect(newListDevelopers[0].nome).toBe("Danilo Henrique");
    expect(newListDevelopers[0].idade).toBe(26);
    expect(newListDevelopers[0].hobby).toBe("play poker");
  });
});
