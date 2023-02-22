import { Request, Response } from "express";
import IServiceKiller from "../interfaces/IServiceKiller";

export default class KillerController {
  private _service: IServiceKiller;

  constructor(service: IServiceKiller) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response) {
    const result = await this._service.getAll();
    res.status(200).json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this._service.findById(Number(id))
      res.status(201).json(result);
    }
    catch (_) {
      res.status(400).json({ Message: 'Invalid ID' })
    }
  }
}