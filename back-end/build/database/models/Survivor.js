"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Survivor extends sequelize_1.Model {
}
Survivor.init({
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
    description: {
        allowNull: false,
        type: (0, sequelize_1.STRING)(2000),
    },
    lore: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    dlc: {
        allowNull: true,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
    modelName: 'survivors'
});
exports.default = Survivor;
