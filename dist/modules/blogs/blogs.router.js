"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blogs_contrler_1 = require("./blogs.contrler");
const userValidation_1 = require("../../middleware/userValidation");
const blogs_validation_1 = require("./blogs.validation");
const router = express_1.default.Router();
router.post("/create-blog", (0, userValidation_1.validateSchema)(blogs_validation_1.blogValidation), blogs_contrler_1.blogControler.blogCreateControler);
exports.blogRouter = router;
