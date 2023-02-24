"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PerkController {
    constructor(service) {
        this._service = service;
    }
    getSurvivorPerks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this._service.getSurvivorPerks(Number(id));
                res.status(201).json(result);
            }
            catch (_) {
                res.status(400).json({ Message: 'Invalid ID' });
            }
        });
    }
    getAllSurvivorPerks(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._service.getAllSurvivorPerks();
            res.status(200).json(result);
        });
    }
    getKillerPerks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this._service.getKillerPerks(Number(id));
                res.status(201).json(result);
            }
            catch (_) {
                res.status(400).json({ Message: 'Invalid ID' });
            }
        });
    }
    getAllKillerPerks(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._service.getAllKillerPerks();
            res.status(200).json(result);
        });
    }
}
exports.default = PerkController;
