import { ModelStatic } from 'sequelize';
import KillerPerks from "../../database/models/KillerPerk";
import SurvivorPerks from "../../database/models/SurvivorPerk";
import IServicePerk from '../interfaces/IServicePerk';

export default class PerkService implements IServicePerk {
  protected survivorPerkModel: ModelStatic<SurvivorPerks> = SurvivorPerks;
  protected killerPerkModel: ModelStatic<KillerPerks> = KillerPerks;

  async getSurvivorPerks(id: number): Promise<SurvivorPerks[]> {
    const result = await this.survivorPerkModel.findAll(
      {where: { survivor_id: id }});
    if (!result) {
      throw new Error('Invalid ID');
    }
    else {
      return result;
    }
  }

  async getAllSurvivorPerks(): Promise<SurvivorPerks[]> {
    return await this.survivorPerkModel.findAll();
  }

  async getKillerPerks(id: number): Promise<KillerPerks[]> {
    const result = await this.killerPerkModel.findAll(
      { where: { killer_id: id }});
    if (!result) {
      throw new Error('Invalid ID');
    }
    else {
      return result;
    }
  }

  async getAllKillerPerks(): Promise<KillerPerks[]> {
    return await this.killerPerkModel.findAll();
  }
}