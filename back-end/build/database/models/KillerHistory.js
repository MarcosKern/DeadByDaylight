"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class KillerHistory extends sequelize_1.Model {
}
KillerHistory.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    history: {
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
    modelName: 'killer_history'
});
exports.default = KillerHistory;
