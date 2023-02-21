import { Model, INTEGER, STRING } from "sequelize";
import db from '.';

class Killer extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare lore: string;
  declare dlc?: string;
}

Killer.init({
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
  modelName: 'Killers'
});

export default Killer;