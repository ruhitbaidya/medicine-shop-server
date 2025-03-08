"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    return res.status(data?.status).json({
        message: data?.message,
        data: data?.data,
    });
};
exports.sendResponse = sendResponse;
