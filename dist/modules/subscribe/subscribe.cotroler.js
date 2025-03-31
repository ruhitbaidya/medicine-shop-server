"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const subscribe_model_1 = require("./subscribe.model");
const subscribe_services_1 = require("./subscribe.services");
const createSubscribeControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    const findEmail = await subscribe_model_1.subscribeModel.findOne({ email });
    console.log(findEmail);
    if (findEmail) {
        console.log("get");
        (0, sendResponse_1.sendResponse)(res, {
            status: 200,
            message: "This Email Already Exist",
            data: {},
        });
    }
    else {
        console.log("wrong");
        const result = await subscribe_services_1.subscribeServices.createSubscribeServices(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            status: 200,
            message: "Sucessfully Subscribe",
            data: result,
        });
    }
});
const getAllSubscribeControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await subscribe_services_1.subscribeServices.getAllSubscribeServices();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get All Subscribe",
        data: result,
    });
});
const getSingalSubscribeControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await subscribe_services_1.subscribeServices.getSingalSubscribeServices(id);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get Singal Subscribe",
        data: result,
    });
});
const deleteSubscribeControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await subscribe_services_1.subscribeServices.deleteSubscribeServices(id);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Delete Successfully Subscribe",
        data: result,
    });
});
exports.subscribeControler = {
    createSubscribeControler,
    getAllSubscribeControler,
    getSingalSubscribeControler,
    deleteSubscribeControler,
};
