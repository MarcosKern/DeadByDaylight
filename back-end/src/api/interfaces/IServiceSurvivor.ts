import Survivor from "../../database/models/Survivor";
import ICharacter from "./ICharacter";

export default interface IServiceSurvivor {
  create(dto: ICharacter): Promise<Survivor>;
  getAll(): Promise<Survivor[]>;
  findById(id: number): Promise<Survivor>;
}