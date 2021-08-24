import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDevelopersUseCase } from "./ListDevelopersUseCase";

class ListDevelopersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listeDeveloperUseCase = container.resolve(ListDevelopersUseCase);
    const params = request.query;

    const page = params.page || 1;
    const limit = params.limit || 10;

    const all = await listeDeveloperUseCase.execute(
      Number(page),
      Number(limit),
    );

    return response.json(all);
  }
}

export { ListDevelopersController };
