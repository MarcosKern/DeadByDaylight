"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Killer_1 = __importDefault(require("./Killer"));
class KillerPerks extends sequelize_1.Model {
}
KillerPerks.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    imageUrl: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    killerId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    }
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
    modelName: 'killer_perks'
});
KillerPerks.belongsTo(Killer_1.default, { foreignKey: 'id', as: 'killer' });
Killer_1.default.hasMany(KillerPerks, { foreignKey: 'killerId', as: 'perks' });
exports.default = KillerPerks;
