"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = void 0;
const jwt_decode_1 = require("jwt-decode");
const user_model_1 = require("../users/user.model");
const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ success: false, message: "Unauthorized user" });
        }
        const users = (0, jwt_decode_1.jwtDecode)(token);
        if (!users.email) {
            res.status(400).json({ success: false, message: "Invalid token" });
        }
        const findUser = await user_model_1.userModel.findOne({ email: users.email });
        if (!findUser) {
            res.status(404).json({ success: false, message: "User not found" });
        }
        if (findUser?.role !== "customer") {
            res.status(403).json({ success: false, message: "Access denied" });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
};
exports.verifyUser = verifyUser;
