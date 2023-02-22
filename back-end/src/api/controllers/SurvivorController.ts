import { Request, Response } from "express";
import IServiceSurvivor from "../interfaces/IServiceSurvivor"

export default class SurvivorController {
  private _service: IServiceSurvivor;

  constructor(service: IServiceSurvivor) {
    this._service = service;
  }

  async getAllSurvivors(_req: Request, res: Response) {
    const result = await this._service.getAll();
    res.status(200).json(result);
  }
}