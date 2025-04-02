"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewServices = void 0;
const review_model_1 = require("./review.model");
const createproductReviewServices = async (data) => {
    const result = review_model_1.reviewModel.create(data);
    return result;
};
const getAllProductReviewServices = async () => {
    const result = review_model_1.reviewModel.find();
    return result;
};
exports.productReviewServices = {
    createproductReviewServices,
    getAllProductReviewServices
};
