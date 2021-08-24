import { Router } from "express";

import { CreateDeveloperController } from "@modules/developers/useCases/createDeveloper/CreateDeveloperController";
import { ListDevelopersController } from "@modules/developers/useCases/listDevelopers/ListDevelopersController";
import { ShowDeveloperController } from "@modules/developers/useCases/showDeveloper/ShowDeveloperController";

const developersRoutes = Router();

const createDeveloperController = new CreateDeveloperController();
const listDevelopersController = new ListDevelopersController();
const showDeveloperController = new ShowDeveloperController();

developersRoutes.post("/", createDeveloperController.handle);
developersRoutes.get("/", listDevelopersController.handle);
developersRoutes.get("/:uuid", showDeveloperController.handle);

export { developersRoutes };
