import { Router, Request, Response } from 'express';
import PerkController from "../controllers/PerkController";
import PerkServices from "../services/PerksService";

const perksRoutes = Router();

const perkService = new PerkServices;
const perkController = new PerkController(perkService);

perksRoutes.get('/perks/survivor', (_req: Request, res: Response) =>
  perkController.getAllSurvivorPerks(_req, res));

perksRoutes.get('/perks/survivor/:id', (req: Request, res: Response) =>
  perkController.getSurvivorPerks(req, res));

perksRoutes.get('/perks/killer', (_req: Request, res: Response) =>
  perkController.getAllKillerPerks(_req, res));

perksRoutes.get('/perks/killer/:id', (req: Request, res: Response) =>
  perkController.getKillerPerks(req, res));
export default perksRoutes