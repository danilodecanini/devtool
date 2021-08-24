import { Request, Response } from "express";
import { container } from "tsyringe";

import { ApplicationError } from "@shared/errors/ApplicationError";

import { UpdateDeveloperUseCase } from "./UpdateDeveloperUseCase";

class UpdateDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateDeveloperUseCase = container.resolve(UpdateDeveloperUseCase);
    const developerUuid = request.params.uuid;
    const { nome, idade, sexo, hobby, datanascimento } = request.body;

    if (!developerUuid) {
      throw new ApplicationError("Missing developer UUID", 400);
    }

    const newData = {
      nome,
      idade,
      sexo,
      hobby,
      datanascimento,
    };

    await updateDeveloperUseCase.execute(developerUuid, newData);

    return response.status(200).send();
  }
}

export { UpdateDeveloperController };
