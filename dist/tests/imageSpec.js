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
const imageControllers_1 = __importDefault(require("../utilities/imageControllers"));
describe('Test utilities/image resize function', () => {
    it('expects resize not to throw an error', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(imageControllers_1.default.resize('encenadaport', 200, 200)).toBeResolved();
    }));
    it('expects resize to throw an error for bad input file', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(imageControllers_1.default.resize('badfilepath', 200, 200)).toBeRejectedWith(new Error('Input file is missing'));
    }));
});
