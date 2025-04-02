"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    comment: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    pid: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
        ref: "medicine"
    },
    rating: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
exports.reviewModel = (0, mongoose_1.model)("productReview", reviewSchema);
