import { Router } from "express";

import { CreateDeveloperController } from "@modules/developers/useCases/createDeveloper/CreateDeveloperController";
import { DeleteDeveloperController } from "@modules/developers/useCases/deleteDeveloper/DeleteDeveloperController";
import { ListDevelopersController } from "@modules/developers/useCases/listDevelopers/ListDevelopersController";
import { ShowDeveloperController } from "@modules/developers/useCases/showDeveloper/ShowDeveloperController";
import { UpdateDeveloperController } from "@modules/developers/useCases/updateDeveloper/UpdateDeveloperController";

const developersRoutes = Router();

const createDeveloperController = new CreateDeveloperController();
const listDevelopersController = new ListDevelopersController();
const showDeveloperController = new ShowDeveloperController();
const updateDevelopersController = new UpdateDeveloperController();
const deleteDeveloperController = new DeleteDeveloperController();

developersRoutes.post("/", createDeveloperController.handle);
developersRoutes.get("/", listDevelopersController.handle);
developersRoutes.get("/:uuid", showDeveloperController.handle);
developersRoutes.put("/:uuid", updateDevelopersController.handle);
developersRoutes.delete("/:uuid", deleteDeveloperController.handle);

export { developersRoutes };
