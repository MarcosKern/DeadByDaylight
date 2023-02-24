"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SurvivorController_1 = __importDefault(require("../controllers/SurvivorController"));
const SurvivorService_1 = __importDefault(require("../services/SurvivorService"));
const survivorRoutes = (0, express_1.Router)();
const survivorService = new SurvivorService_1.default();
const survivorController = new SurvivorController_1.default(survivorService);
survivorRoutes.get('/survivors', (_req, res) => survivorController.getAll(_req, res));
survivorRoutes.get('/survivors/:id', (req, res) => survivorController.findById(req, res));
exports.default = survivorRoutes;
