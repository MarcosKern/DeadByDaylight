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
const Survivor_1 = __importDefault(require("../../database/models/Survivor"));
const SurvivorHistory_1 = __importDefault(require("../../database/models/SurvivorHistory"));
class SurvivorService {
    constructor() {
        this.model = Survivor_1.default;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(Object.assign({}, dto));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findAll({
                include: [
                    { model: SurvivorHistory_1.default, as: 'history' }
                ]
            });
            return result;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByPk(id);
            if (!(result === null || result === void 0 ? void 0 : result.dataValues)) {
                throw new Error('Invalid ID');
            }
            else {
                return result.dataValues;
            }
        });
    }
}
exports.default = SurvivorService;
