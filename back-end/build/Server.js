"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const App_1 = __importDefault(require("./App"));
const PORT = process.env.PORT || '3306';
const app = new App_1.default();
app.start(PORT);
