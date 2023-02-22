import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Survivor from "./Survivor";

class SurvivorPerks extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare survivorId: number;
}

SurvivorPerks.init({
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
  survivorId: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'survivor_perks'
});

SurvivorPerks.belongsTo(Survivor, { foreignKey: 'survivor_id', as: 'id_perk' });
Survivor.hasMany(SurvivorPerks, { foreignKey: 'survivor_id', as: 'id_perk' });

export default SurvivorPerks;