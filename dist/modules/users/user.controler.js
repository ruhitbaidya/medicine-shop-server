"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const payment_modal_1 = require("../payment/payment.modal");
const user_model_1 = require("./user.model");
const user_services_1 = require("./user.services");
const createUserControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await user_services_1.userServices.createUserServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 202,
        message: "User Create Successfully",
        data: result,
    });
});
const getSiUserControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const email = req.params.email;
    console.log(email);
    const result = await user_services_1.userServices.getSingalUserServices(email);
    (0, sendResponse_1.sendResponse)(res, {
        status: 202,
        message: "User Get Successfully",
        data: result,
    });
});
const medicineOverViewControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await user_services_1.userServices.medicineOverviewServices();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "get all info",
        data: result,
    });
});
const getAllUserControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await user_model_1.userModel.find();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get all user",
        data: result,
    });
});
const getAlluserInfoOrder = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await payment_modal_1.OrderModel.find({ user: id }, { shippingAddress: 0 }).populate("medicine.id");
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "get order ",
        data: result,
    });
});
const updateUserControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { id, name, email, phone } = req.body;
    const result = await user_model_1.userModel.findByIdAndUpdate({ _id: id }, {
        $set: {
            name,
            email,
            phone,
        },
    });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "User Update success",
        data: result,
    });
});
exports.userControler = {
    createUserControler,
    getSiUserControler,
    medicineOverViewControler,
    getAllUserControler,
    getAlluserInfoOrder,
    updateUserControler,
};
