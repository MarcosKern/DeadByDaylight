import { Model, INTEGER, STRING } from "sequelize";
import db from '.';

class Killer extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare description: string;
  declare lore: string;
  declare dlc?: string;
  declare music?: string;
  declare icon: string;
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
  description: {
    allowNull: false,
    type: STRING(2000),
  },
  lore: {
    allowNull: false,
    type: STRING(1000),
  },
  dlc: {
    allowNull: true,
    type: STRING,
  },
  music: {
    allowNull: true,
    type: STRING,
  },
  icon: {
    allowNull: false,
    type: STRING,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'killers'
});

export default Killer;