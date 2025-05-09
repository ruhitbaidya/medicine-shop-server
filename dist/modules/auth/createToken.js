"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config/config");
const createToken = async (data) => {
    const token = jsonwebtoken_1.default.sign(data, config_1.config.tokenSecrate, {
        expiresIn: "1d",
    });
    return token;
};
exports.createToken = createToken;
