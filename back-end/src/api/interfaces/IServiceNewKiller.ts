import Killer from "../../database/models/Killer";
import ICharacter from "./ICharacter";

export default interface IServiceNewKiller {
  create(dto: ICharacter): Promise<Killer>
}