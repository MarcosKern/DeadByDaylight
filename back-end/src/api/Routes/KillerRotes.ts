import { Router, Request, Response } from "express";
import KillerController from "../controllers/KillerController";
import KillerService from "../services/KillerService";

const killerRoutes = Router();
const killerService = new KillerService();
const killerController = new KillerController(killerService)

killerRoutes.get('/killers', (_req: Request, res: Response) =>
  killerController.getAll(_req, res));

killerRoutes.get('/killers/:id', (req: Request, res: Response) =>
  killerController.findById(req, res));

export default killerRoutes;