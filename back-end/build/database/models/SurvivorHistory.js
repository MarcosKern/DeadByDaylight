"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class SurvivorHistory extends sequelize_1.Model {
}
SurvivorHistory.init({
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
    survivorId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    }
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
    modelName: 'Survivor_history'
});
exports.default = SurvivorHistory;
