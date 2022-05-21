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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
function resize(imageName, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        const imagePath = path_1.default.join(__dirname, '..', '..', 'images', `${imageName}.jpg`);
        const thumbPath = path_1.default.join(__dirname, '..', '..', 'thumbs', `${imageName}-${width}x${height}.jpg`);
        try {
            // If thumbnail is found, do not recreate it
            yield fs_1.promises.access(thumbPath);
        }
        catch (error) {
            // If thumbnail is not found, create it first
            yield (0, sharp_1.default)(imagePath).resize(width, height).toFile(thumbPath);
        }
        return thumbPath;
    });
}
exports.default = { resize };
