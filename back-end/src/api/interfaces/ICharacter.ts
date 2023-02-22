export type DLC = string | null;

export default interface ICharacter {
  id?: number;
  name: string;
  imageUrl: string;
  description: string;
  lore: string;
  dlc?: DLC;
}