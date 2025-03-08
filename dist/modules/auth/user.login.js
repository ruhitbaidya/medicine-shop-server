"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const user_model_1 = require("../users/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createToken_1 = require("./createToken");
exports.userLogin = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await user_model_1.userModel.findOne({ email });
    if (findUser) {
        bcrypt_1.default.compare(password, findUser.password, async function (err, result) {
            if (result) {
                const token = await (0, createToken_1.createToken)({
                    email: findUser.email,
                    role: findUser.role,
                });
                (0, sendResponse_1.sendResponse)(res, {
                    status: 200,
                    message: "Successfully Login",
                    data: token,
                });
            }
            else {
                (0, sendResponse_1.sendResponse)(res, {
                    status: 405,
                    message: "Unauthrize User",
                    data: null,
                });
            }
        });
    }
    else {
        (0, sendResponse_1.sendResponse)(res, {
            status: 405,
            message: "Unauthrize User",
            data: null,
        });
    }
});
