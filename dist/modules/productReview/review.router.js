"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const review_controler_1 = require("./review.controler");
const router = express_1.default.Router();
router.post("/create-review", review_controler_1.reviewControler.createProductReviewControler);
router.get("/get-all-review", review_controler_1.reviewControler.getAllReviewControler);
exports.productReviewRouter = router;
