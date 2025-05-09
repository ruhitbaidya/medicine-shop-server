"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userValidation = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    phone: zod_1.default.string().min(11).max(14),
    password: zod_1.default.string(),
});
