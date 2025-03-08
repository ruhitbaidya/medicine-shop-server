"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoute = void 0;
const express_1 = __importDefault(require("express"));
const payment_controler_1 = require("./payment.controler");
const adminTokenVerify_1 = require("../auth/adminTokenVerify");
const router = express_1.default.Router();
router.post("/paymentInfo", payment_controler_1.paymentControler.createPaymentControler);
router.post("/order", payment_controler_1.paymentControler.createOrderControler);
router.get("/getOrder", payment_controler_1.paymentControler.getAllOrderControler);
router.patch("/updatestatus", adminTokenVerify_1.adminverifyUser, payment_controler_1.paymentControler.updateOrderStatus);
router.get("/getIdOrder/:id", payment_controler_1.paymentControler.getSpeaceOrder);
exports.paymentRoute = router;
