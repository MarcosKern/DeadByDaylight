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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KillerPerk_1 = __importDefault(require("../../database/models/KillerPerk"));
const SurvivorPerk_1 = __importDefault(require("../../database/models/SurvivorPerk"));
class PerkService {
    constructor() {
        this.survivorPerkModel = SurvivorPerk_1.default;
        this.killerPerkModel = KillerPerk_1.default;
    }
    getSurvivorPerks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.survivorPerkModel.findAll({ where: { survivor_id: id } });
            if (!result) {
                throw new Error('Invalid ID');
            }
            else {
                return result;
            }
        });
    }
    getAllSurvivorPerks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.survivorPerkModel.findAll();
        });
    }
    getKillerPerks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.killerPerkModel.findAll({ where: { killer_id: id } });
            if (!result) {
                throw new Error('Invalid ID');
            }
            else {
                return result;
            }
        });
    }
    getAllKillerPerks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.killerPerkModel.findAll();
        });
    }
}
exports.default = PerkService;
