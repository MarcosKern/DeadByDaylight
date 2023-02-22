import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Survivor from "./Survivor";

class SurvivorHistory extends Model {
  declare readonly id: number;
  declare name: string;
  declare imageUrl: string;
  declare survivorId: number;
}

SurvivorHistory.init({
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
  survivorId: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'survivor_history'
});

SurvivorHistory.belongsTo(Survivor, { foreignKey: 'id', as: 'survivor' });
Survivor.hasOne(SurvivorHistory, { foreignKey: 'id', as: 'history' });

export default SurvivorHistory;