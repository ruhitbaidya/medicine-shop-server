"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentServices = void 0;
const stripe_1 = __importDefault(require("stripe"));
const payment_modal_1 = require("./payment.modal");
const stripe = new stripe_1.default(process.env.SECRATE_KEY);
const createPaymentInfoServices = async (amount) => {
    try {
        const paymentInt = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return { clientSecret: paymentInt };
    }
    catch (err) {
        console.error(err);
    }
};
const confirmPaymentOrederServices = async (data) => {
    const result = await payment_modal_1.OrderModel.create(data);
    return result;
};
exports.paymentServices = {
    createPaymentInfoServices,
    confirmPaymentOrederServices,
};
