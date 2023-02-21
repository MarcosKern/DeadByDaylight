import Survivor from "../../database/models/Survivor";
import ICharacter from "./ICharacter";

export default interface IServiceNewSurvivor {
  create(dta: ICharacter): Promise<Survivor>
}