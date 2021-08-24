import { Request, Response } from "express";
import { container } from "tsyringe";

import { ApplicationError } from "@shared/errors/ApplicationError";

import { ShowDeveloperUseCase } from "./ShowDeveloperUseCase";

class ShowDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showDeveloperUseCase = container.resolve(ShowDeveloperUseCase);
    const developerUuid = request.params.uuid;

    if (!developerUuid) {
      throw new ApplicationError("Missing developer UUID");
    }

    const developer = await showDeveloperUseCase.execute({
      developerUuid,
    });

    return response.status(200).json(developer);
  }
}

export { ShowDeveloperController };
