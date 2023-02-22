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
const chai_1 = require("chai");
const sequelize_1 = require("sequelize");
const sinon_1 = __importDefault(require("sinon"));
const SurvivorService_1 = __importDefault(require("../../src/api/services/SurvivorService"));
const Survivor_1 = __importDefault(require("../../src/database/models/Survivor"));
const outputMock = new Survivor_1.default({
    id: 1,
    name: 'Dwight Fairfield',
    imageUrl: 'sample:/url',
    lore: 'Random generyc lore',
    dlc: undefined,
});
describe('Testing service: New Survivor', function () {
    afterEach(function () {
        sinon_1.default.restore();
    });
    it('Case 1: Must find an survivor', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // WHEN
            sinon_1.default.stub(sequelize_1.Model, 'findByPk').resolves(outputMock);
            const service = new SurvivorService_1.default();
            const result = yield service.findById(1);
            // THEN
            (0, chai_1.expect)(result).to.be.equal(outputMock.dataValues);
        });
    });
    it('Case 2: Must get an error whit invalid id', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // WHEN
            sinon_1.default.stub(sequelize_1.Model, 'findByPk');
            const service = new SurvivorService_1.default();
            // THEN
            try {
                yield service.findById(2);
            }
            catch (err) {
                (0, chai_1.expect)(err).to.eql(Error('Invalid ID'));
            }
        });
    });
});
