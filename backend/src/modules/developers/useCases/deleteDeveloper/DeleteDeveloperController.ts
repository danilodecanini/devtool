import { Request, Response } from "express";
import { container } from "tsyringe";

import { ApplicationError } from "@shared/errors/ApplicationError";

import { DeleteDeveloperUseCase } from "./DeleteDeveloperUseCase";

class DeleteDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteDeveloperUseCase = container.resolve(DeleteDeveloperUseCase);
    const developerUuid = request.params.uuid;

    if (!developerUuid) {
      throw new ApplicationError("Missing developer UUID", 400);
    }

    await deleteDeveloperUseCase.execute({
      developerUuid,
    });

    return response.status(204).send();
  }
}

export { DeleteDeveloperController };
