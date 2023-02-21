import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Killer from "./Killer";

class KillerHistory extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare killerId: number;
}

KillerHistory.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  history: {
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
  modelName: 'killer_history'
});

KillerHistory.belongsTo(Killer, { foreignKey: 'killer_id', as: 'id_history' });
Killer.hasMany(KillerHistory, { foreignKey: 'killer_id', as: 'id_history' });

export default KillerHistory;