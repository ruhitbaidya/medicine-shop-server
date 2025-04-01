"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminChartControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const medicineModel_1 = require("../createmedicine/medicineModel");
const payment_modal_1 = require("../payment/payment.modal");
const subscribe_model_1 = require("../subscribe/subscribe.model");
const user_model_1 = require("../users/user.model");
exports.adminChartControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const shortMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const date = new Date();
    const manths = date.getMonth();
    const month = shortMonths[manths];
    const orders = await payment_modal_1.OrderModel.find().countDocuments();
    const users = await user_model_1.userModel.find().countDocuments();
    const subscriptions = await subscribe_model_1.subscribeModel.find().countDocuments();
    const products = await medicineModel_1.medicineModel.find().countDocuments();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "get all details",
        data: [{ month, orders, users, subscriptions, products }],
    });
});
