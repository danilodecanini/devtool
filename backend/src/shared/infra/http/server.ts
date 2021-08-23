import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "@shared/infra/typeorm";

import { errorHandler } from "@shared/infra/http/middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use(errorHandler);

app.listen(3333, () => console.log("Backend is running on port 3333"));
