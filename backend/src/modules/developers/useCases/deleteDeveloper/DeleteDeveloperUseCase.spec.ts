import { MockDevelopersRepository } from "@modules/developers/repositories/mock/MockDevelopersRepository";
import { ApplicationError } from "@shared/errors/ApplicationError";

import { CreateDeveloperUseCase } from "../createDeveloper/CreateDeveloperUseCase";
import { ListDevelopersUseCase } from "../listDevelopers/ListDevelopersUseCase";
import { DeleteDeveloperUseCase } from "./DeleteDeveloperUseCase";

let createDeveloperUseCase: CreateDeveloperUseCase;
let mockDevelopersRepository: MockDevelopersRepository;
let listDevelopersUseCase: ListDevelopersUseCase;
let deleteDeveloperUseCase: DeleteDeveloperUseCase;

describe("Delete Developer", () => {
  beforeEach(() => {
    mockDevelopersRepository = new MockDevelopersRepository();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      mockDevelopersRepository,
    );

    listDevelopersUseCase = new ListDevelopersUseCase(mockDevelopersRepository);
    deleteDeveloperUseCase = new DeleteDeveloperUseCase(
      mockDevelopersRepository,
    );
  });

  it("should be able delete one especific developer", async () => {
    createDeveloperUseCase.execute({
      nome: `Danilo`,
      idade: 25,
      sexo: 1,
      hobby: "playing cards",
      datanascimento: "1990-01-10",
    });

    let developers = await listDevelopersUseCase.execute(1, 10);
    const developerUuid = developers[0].id;

    await deleteDeveloperUseCase.execute({ developerUuid });

    developers = await listDevelopersUseCase.execute(1, 10);

    expect(developers.length).toBe(0);
  });

  it("should not be able delete one developer that doesnt exists", async () => {
    expect(async () => {
      const developerUuid = "non-existing-uuid";

      await deleteDeveloperUseCase.execute({ developerUuid });
    }).rejects.toBeInstanceOf(ApplicationError);
  });
});
