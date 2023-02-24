"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerksRotes_1 = __importDefault(require("./PerksRotes"));
const SurvivorRotes_1 = __importDefault(require("./SurvivorRotes"));
const KillerRotes_1 = __importDefault(require("./KillerRotes"));
exports.default = { perksRoutes: PerksRotes_1.default, survivorRoutes: SurvivorRotes_1.default, killerRoutes: KillerRotes_1.default };
