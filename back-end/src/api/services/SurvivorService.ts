import { ModelStatic } from "sequelize";
import Survivor from "../../database/models/Survivor";
import SurvivorPerks from "../../database/models/SurvivorPerk";
import ICharacter from "../interfaces/ICharacter";
import IServiceSurvivor from "../interfaces/IServiceSurvivor";

export default class SurvivorService implements IServiceSurvivor {
  protected model: ModelStatic<Survivor> = Survivor;

  async create(dto: ICharacter): Promise<Survivor> {
    return await this.model.create({ ...dto })
  }

  async getAll(): Promise<Survivor[]> {
    const result = await this.model.findAll({
      include: [
        {model: SurvivorPerks, as: 'perks', attributes: { exclude: ['survivorId', 'id'] }},
      ],
    });
    return result;
  }

  async findById(id: number): Promise<Survivor> {
    const result = await this.model.findByPk(id);

    if (!result?.dataValues) {
      throw new Error('Invalid ID');
    }
    else {
      return result.dataValues;
    }
  }
}