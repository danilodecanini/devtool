import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase";

class CreateDeveloperController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createDeveloperUseCase = container.resolve(CreateDeveloperUseCase);
    const data = request.body;

    await createDeveloperUseCase.execute(data);

    return response.status(201).send();
  }
}

export { CreateDeveloperController };
