import { Request, Response } from "express";
import IServicePerk from "../interfaces/IServicePerk";

export default class PerkController {
  private _service: IServicePerk;

  constructor(service: IServicePerk) {
    this._service = service;
  }

  async getSurvivorPerks(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this._service.getSurvivorPerks(Number(id))
      res.status(201).json(result);
    }
    catch (_) {
      res.status(400).json({ Message: 'Invalid ID' })
    }
  }

  async getAllSurvivorPerks(_req: Request, res: Response) {
    const result = await this._service.getAllSurvivorPerks();
    res.status(200).json(result)
  }

  async getKillerPerks(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this._service.getKillerPerks(Number(id))
      res.status(201).json(result);
    }
    catch (_) {
      res.status(400).json({ Message: 'Invalid ID' })
    }
  }

  async getAllKillerPerks(_req: Request, res: Response) {
    const result = await this._service.getAllKillerPerks();
    res.status(200).json(result)
  }
}