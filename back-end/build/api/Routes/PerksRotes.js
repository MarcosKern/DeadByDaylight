"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerkController_1 = __importDefault(require("../controllers/PerkController"));
const PerksService_1 = __importDefault(require("../services/PerksService"));
const perksRoutes = (0, express_1.Router)();
const perkService = new PerksService_1.default;
const perkController = new PerkController_1.default(perkService);
perksRoutes.get('/perks/survivor', (_req, res) => perkController.getAllSurvivorPerks(_req, res));
perksRoutes.get('/perks/survivor/:id', (req, res) => perkController.getSurvivorPerks(req, res));
perksRoutes.get('/perks/killer', (_req, res) => perkController.getAllKillerPerks(_req, res));
perksRoutes.get('/perks/killer/:id', (req, res) => perkController.getKillerPerks(req, res));
exports.default = perksRoutes;
