"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = __importDefault(require("./api/imageProcessing"));
const routes = express_1.default.Router();
routes.get('/', (_req, res) => {
    res.send('Main API route');
});
routes.use('/images', imageProcessing_1.default);
exports.default = routes;
