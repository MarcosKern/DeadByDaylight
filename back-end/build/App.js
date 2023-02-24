"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const rotes_1 = __importDefault(require("./api/Routes/rotes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.initAuthHeader();
        this.initRoutes();
    }
    initAuthHeader() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    initRoutes() {
        this.app.use(rotes_1.default.killerRoutes, rotes_1.default.perksRoutes, rotes_1.default.survivorRoutes);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
