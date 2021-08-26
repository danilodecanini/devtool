import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDevelopersUseCase } from "./ListDevelopersUseCase";

class ListDevelopersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listeDeveloperUseCase = container.resolve(ListDevelopersUseCase);
    const params = request.query;

    const page = params.page || 1;
    const limit = params.limit || 10;
    const { search_value } = params;
    const { search_type } = params;

    const all = await listeDeveloperUseCase.execute(
      Number(page),
      Number(limit),
      String(search_value),
      String(search_type),
    );

    return response.json(all);
  }
}

export { ListDevelopersController };
