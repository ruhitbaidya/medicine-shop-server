"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.subscribeValidationSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    name: zod_1.default.string(),
    profession: zod_1.default.string()
});
