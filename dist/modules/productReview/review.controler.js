"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const review_services_1 = require("./review.services");
const createProductReviewControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const data = req.body;
    const result = await review_services_1.productReviewServices.createproductReviewServices(data);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Review Submit",
        data: result
    });
});
const getAllReviewControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await review_services_1.productReviewServices.getAllProductReviewServices();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "get All Review",
        data: result
    });
});
exports.reviewControler = {
    createProductReviewControler,
    getAllReviewControler
};
