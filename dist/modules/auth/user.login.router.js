"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_1 = __importDefault(require("express"));
const user_login_1 = require("./user.login");
const router = express_1.default.Router();
router.post("/", user_login_1.userLogin);
exports.login = router;
