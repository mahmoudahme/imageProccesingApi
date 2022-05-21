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
const express_1 = __importDefault(require("express"));
const imageControllers_1 = __importDefault(require("../../utilities/imageControllers"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!filename) {
        res.status(400).json({ error: 'filename is missing' });
        return;
    }
    if (!(width > 0)) {
        res
            .status(400)
            .json({ error: 'width is missing or not a positive number' });
        return;
    }
    if (!(height > 0)) {
        res
            .status(400)
            .json({ error: 'height is missing or not a positive number' });
        return;
    }
    try {
        const thumb = yield imageControllers_1.default.resize(filename, width, height);
        res.sendFile(thumb);
    }
    catch (error) {
        res.status(404).json({ error: 'image not found' });
    }
}));
exports.default = images;
