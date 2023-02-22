import { Model, INTEGER, STRING,  } from "sequelize";
import db from '.';
import IHistory from "../../api/interfaces/IHistory";
import SurvivorHistory from "./SurvivorHistory";

class Survivor extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare lore: string;
  declare dlc?: string;
  declare history?: IHistory;
}

Survivor.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  imageUrl: {
    allowNull: false,
    type: STRING,
  },
  lore: {
    allowNull: false,
    type: STRING(1000),
  },
  dlc: {
    allowNull: true,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'survivors'
});

export default Survivor;