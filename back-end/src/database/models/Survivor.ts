import { Model, INTEGER, STRING } from "sequelize";
import db from '.';

class Survivor extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare description: string;
  declare lore: string;
  declare dlc?: string;
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
  description: {
    allowNull: false,
    type: STRING(2000),
  },
  lore: {
    allowNull: false,
    type: STRING,
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