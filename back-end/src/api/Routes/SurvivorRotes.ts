import { Router, Request, Response } from "express";
import SurvivorController from "../controllers/SurvivorController";
import SurvivorService from "../services/SurvivorService";

const survivorRoutes = Router();
const survivorService = new SurvivorService();
const survivorController = new SurvivorController(survivorService)

survivorRoutes.get('/survivors', (_req: Request, res: Response) => survivorController.getAllSurvivors(_req, res))

export default survivorRoutes;