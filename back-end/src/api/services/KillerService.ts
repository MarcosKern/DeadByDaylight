import { ModelStatic } from 'sequelize';
import Killer from "../../database/models/Killer";
import ICharacter from "../interfaces/ICharacter";
import IServiceKiller from "../interfaces/IServiceKiller";

export default class KillerService implements IServiceKiller {
  protected model: ModelStatic<Killer> = Killer;

  async create(dto: ICharacter): Promise<Killer> {
    return await this.model.create({ ...dto })
  }
  async getAll(): Promise<Killer[]> {
    const result = await this.model.findAll();
    return result;
  }
  
  async findById(id: number): Promise<Killer> {
    const result = await this.model.findByPk(id);

    if (!result?.dataValues) {
      throw new Error('Invalid ID');
    }
    else {
      return result.dataValues;
    }
  }
}