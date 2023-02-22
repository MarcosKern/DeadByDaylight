import Killer from "../../database/models/Killer";
import ICharacter from "./ICharacter";

export default interface IServiceKiller {
  create(dto: ICharacter): Promise<Killer>;
  getAll(): Promise<Killer[]>;
  findById(id: number): Promise<Killer>;
}