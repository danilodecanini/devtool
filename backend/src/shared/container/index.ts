import { container } from "tsyringe";

import { DevelopersRepository } from "@modules/developers/infra/typeorm/repositories/DevelopersRepository";
import { IDevelopersRepository } from "@modules/developers/repositories/IDevelopersRepository";

container.registerSingleton<IDevelopersRepository>(
  "DevelopersRepository",
  DevelopersRepository,
);
