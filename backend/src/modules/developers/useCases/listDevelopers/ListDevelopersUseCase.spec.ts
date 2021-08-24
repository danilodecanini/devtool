import { MockDevelopersRepository } from "@modules/developers/repositories/mock/MockDevelopersRepository";
import { CreateDeveloperUseCase } from "@modules/developers/useCases/createDeveloper/CreateDeveloperUseCase";

import { ListDevelopersUseCase } from "./ListDevelopersUseCase";

let createDeveloperUseCase: CreateDeveloperUseCase;
let mockDevelopersRepository: MockDevelopersRepository;
let listDevelopersUseCase: ListDevelopersUseCase;

describe("List Developers", () => {
  beforeEach(() => {
    mockDevelopersRepository = new MockDevelopersRepository();
    createDeveloperUseCase = new CreateDeveloperUseCase(
      mockDevelopersRepository,
    );
    listDevelopersUseCase = new ListDevelopersUseCase(mockDevelopersRepository);
  });

  it("should be able to list all developers", async () => {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < 10; i++) {
      createDeveloperUseCase.execute({
        nome: `Danilo ${i}`,
        idade: i,
        sexo: 1,
        hobby: "playing cards",
        datanascimento: "1990-01-10",
      });
    }

    const developers = await listDevelopersUseCase.execute(1, 10);

    expect(developers.length).toBe(10);
  });

  it("should be able to list all developers without passing parameters", async () => {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < 10; i++) {
      createDeveloperUseCase.execute({
        nome: `Danilo ${i}`,
        idade: i,
        sexo: 1,
        hobby: "playing cards",
        datanascimento: "1990-01-10",
      });
    }

    const developers = await listDevelopersUseCase.execute();

    expect(developers.length).toBe(10);
  });

  it("should be able to list all developers in page 2", async () => {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < 11; i++) {
      createDeveloperUseCase.execute({
        nome: `Danilo ${i}`,
        idade: i,
        sexo: 1,
        hobby: "playing cards",
        datanascimento: "1990-01-10",
      });
    }

    const developers = await listDevelopersUseCase.execute(2, 10);

    expect(developers[0].nome).toBe("Danilo 10");
  });

  it("should be able to list all developers in page 2 without passing limit parameter", async () => {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < 11; i++) {
      createDeveloperUseCase.execute({
        nome: `Danilo ${i}`,
        idade: i,
        sexo: 1,
        hobby: "playing cards",
        datanascimento: "1990-01-10",
      });
    }

    const developers = await listDevelopersUseCase.execute(2);

    expect(developers[0].nome).toBe("Danilo 10");
  });
});
