export type DLC = string | null;

export default interface ICharacter {
  id?: number;
  name: string;
  imageUrl: string;
  lore: string;
  dlc?: DLC;
}