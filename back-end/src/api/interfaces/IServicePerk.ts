import KillerPerks from "../../database/models/KillerPerk";
import SurvivorPerks from "../../database/models/SurvivorPerk";

export default interface IServicePerk {
  getSurvivorPerks(id: number): Promise<SurvivorPerks[]>;
  getAllSurvivorPerks(): Promise<SurvivorPerks[]>
  getKillerPerks(id: number): Promise<KillerPerks[]>;
  getAllKillerPerks(): Promise<KillerPerks[]>
}