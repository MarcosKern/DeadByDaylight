import { ModelStatic } from "sequelize";
import Survivor from "../../database/models/Survivor";
import ICharacter from "../interfaces/ICharacter";
import IServiceSurvivor from "../interfaces/IServiceSurvivor";

export default class SurvivorService implements IServiceSurvivor {
  protected model: ModelStatic<Survivor> = Survivor;

  async create(dto: ICharacter): Promise<Survivor> {
    return await this.model.create({ ...dto })
  }

  async getAll(): Promise<Survivor[]> {
    return await this.model.findAll();
  }

  async findById(id: number): Promise<Survivor> {
    const result = await this.model.findOne({ where: { id: id } });
    if (!result) {
      throw new Error('Invalid ID');
    }
    return result;
  }
}