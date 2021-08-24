import { MockDevelopersRepository } from "@modules/developers/repositories/mock/MockDevelopersRepository";
import { ApplicationError } from "@shared/errors/ApplicationError";

import { CreateDeveloperUseCase } from "../createDeveloper/CreateDeveloperUseCase";
import { ListDevelopersUseCase } from "../listDevelopers/ListDevelopersUseCase";
import { ShowDeveloperUseCase } from "./ShowDeveloperUseCase";

let createDeveloperUseCase: CreateDeveloperUseCase;
let mockDevelopersRepository: MockDevelopersRepository;
let listDevelopersUseCase: ListDevelopersUseCase;
let showDeveloperUseCase: ShowDeveloperUseCase;

describe("Show Developer", () => {
  beforeEach(() => {
    mockDevelopersRepository = new MockDevelopersRepository();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      mockDevelopersRepository,
    );

    listDevelopersUseCase = new ListDevelopersUseCase(mockDevelopersRepository);
    showDeveloperUseCase = new ShowDeveloperUseCase(mockDevelopersRepository);
  });

  it("should be able show one especific developer", async () => {
    createDeveloperUseCase.execute({
      nome: `Danilo`,
      idade: 25,
      sexo: 1,
      hobby: "playing cards",
      datanascimento: "1990-01-10",
    });

    const developer = await listDevelopersUseCase.execute(1, 10);
    const developerUuid = developer[0].id;

    const showDeveloper = await showDeveloperUseCase.execute({ developerUuid });

    expect(showDeveloper).toHaveProperty("nome", "Danilo");
    expect(showDeveloper).toHaveProperty("id", developerUuid);
  });

  it("should not be able show one developer that doesnt exists", async () => {
    expect(async () => {
      const developerUuid = "non-existing-uuid";

      await showDeveloperUseCase.execute({ developerUuid });
    }).rejects.toBeInstanceOf(ApplicationError);
  });
});
