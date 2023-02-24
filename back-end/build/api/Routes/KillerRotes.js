"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const KillerController_1 = __importDefault(require("../controllers/KillerController"));
const KillerService_1 = __importDefault(require("../services/KillerService"));
const killerRoutes = (0, express_1.Router)();
const killerService = new KillerService_1.default();
const killerController = new KillerController_1.default(killerService);
killerRoutes.get('/killers', (_req, res) => killerController.getAll(_req, res));
killerRoutes.get('/killers/:id', (req, res) => killerController.findById(req, res));
exports.default = killerRoutes;
