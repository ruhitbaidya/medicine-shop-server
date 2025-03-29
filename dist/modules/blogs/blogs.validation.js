"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.blogValidation = zod_1.default.object({
    image: zod_1.default.string(),
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    author: zod_1.default.string()
});
