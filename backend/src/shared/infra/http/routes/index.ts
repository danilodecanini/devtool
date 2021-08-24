import { Router } from "express";

import { developersRoutes } from "./developers.route";

const router = Router();

router.use("/developers", developersRoutes);

export { router };
