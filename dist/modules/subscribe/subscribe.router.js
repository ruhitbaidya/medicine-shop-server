"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeRouter = void 0;
const express_1 = __importDefault(require("express"));
const subscribe_cotroler_1 = require("./subscribe.cotroler");
const userValidation_1 = require("../../middleware/userValidation");
const subscribe_validation_1 = require("./subscribe.validation");
const router = express_1.default.Router();
router.post("/create-suvscribe", (0, userValidation_1.validateSchema)(subscribe_validation_1.subscribeValidationSchema), subscribe_cotroler_1.subscribeControler.createSubscribeControler);
router.get("/get-all-subscribe", subscribe_cotroler_1.subscribeControler.getAllSubscribeControler);
router.get("/get-singal-subscribe/:id", subscribe_cotroler_1.subscribeControler.getSingalSubscribeControler);
router.delete("/delete-suvscribe/:id", subscribe_cotroler_1.subscribeControler.deleteSubscribeControler);
exports.subscribeRouter = router;
