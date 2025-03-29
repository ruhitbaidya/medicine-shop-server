"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeModel = void 0;
const mongoose_1 = require("mongoose");
const subscribeSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.subscribeModel = (0, mongoose_1.model)("subscribe", subscribeSchema);
