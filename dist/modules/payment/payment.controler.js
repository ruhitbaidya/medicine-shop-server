"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendMail_1 = require("../../utils/sendMail");
const sendResponse_1 = require("../../utils/sendResponse");
const user_model_1 = require("../users/user.model");
const payment_modal_1 = require("./payment.modal");
const payment_services_1 = require("./payment.services");
const createPaymentControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { price } = req.body;
    const result = await payment_services_1.paymentServices.createPaymentInfoServices(price);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Payment Get Data",
        data: result,
    });
});
const createOrderControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await payment_services_1.paymentServices.confirmPaymentOrederServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Order Create Sucessfull",
        data: result,
    });
});
const getAllOrderControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await payment_modal_1.OrderModel.find().populate({
        path: "medicine.id",
        model: "medicine",
    });
    console.log(result);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "get all order",
        data: result,
    });
});
const updateOrderStatus = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const data = req.body;
    console.log(data, "this");
    const findOrder = await payment_modal_1.OrderModel.findOne({ _id: data.id });
    if (findOrder) {
        const findUser = await user_model_1.userModel.findOne({ _id: findOrder?.user });
        if (findUser) {
            (0, sendMail_1.sendMail)({
                email: findUser?.email,
                text: data?.status,
                name: findUser?.name,
            });
        }
    }
    const result = await payment_modal_1.OrderModel.findByIdAndUpdate({ _id: data.id }, { $set: { status: data.status } });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Status Update Successfull",
        data: result,
    });
});
const getSpeaceOrder = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await payment_modal_1.OrderModel.find({ user: id });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get Order",
        data: result,
    });
});
exports.paymentControler = {
    createPaymentControler,
    createOrderControler,
    getAllOrderControler,
    updateOrderStatus,
    getSpeaceOrder,
};
