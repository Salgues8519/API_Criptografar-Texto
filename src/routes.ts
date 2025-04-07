import { Router } from "express";
import { cripto } from "./controller";

const routes = Router()

routes.post('/cripto', cripto);

export default routes;