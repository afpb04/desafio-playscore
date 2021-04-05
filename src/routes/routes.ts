import { Router } from "express";

import Controller from "../controllers/Controller";

const routes = Router();

const controller = new Controller();

routes.post("/", controller.handle);

export default routes;
