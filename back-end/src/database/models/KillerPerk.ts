import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Killer from "./Killer";

class KillerPerks extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare killerId: number;
}

KillerPerks.init({
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
  killerId: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'killer_perks'
});

KillerPerks.belongsTo(Killer, { foreignKey: 'killer_id', as: 'id_perk' });
Killer.hasMany(KillerPerks, { foreignKey: 'killer_id', as: 'id_perk' });

export default KillerPerks;