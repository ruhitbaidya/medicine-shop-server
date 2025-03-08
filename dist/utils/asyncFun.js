"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncFun = void 0;
const catchAsyncFun = (asyncFun) => {
    return (req, res, next) => {
        Promise.resolve(asyncFun(req, res, next)).catch((err) => next(err));
    };
};
exports.catchAsyncFun = catchAsyncFun;
