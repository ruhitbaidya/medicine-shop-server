"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const config_1 = require("../../config/config");
const medicineModel_1 = require("../createmedicine/medicineModel");
const payment_modal_1 = require("../payment/payment.modal");
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserServices = async (user) => {
    try {
        const saltRounds = Number(config_1.config.salt) || 10; // Ensure it's a number
        const salt = await bcrypt_1.default.genSalt(saltRounds); // Generate Salt
        const hashedPassword = await bcrypt_1.default.hash(user.password, salt); // Hash Password
        user.password = hashedPassword; // Store hashed password
        const result = await user_model_1.userModel.create(user); // Save to database
        return result;
    }
    catch (error) {
        throw new Error("Error creating user: " + error);
    }
};
const getSingalUserServices = async (email) => {
    const result = await user_model_1.userModel.findOne({ email }, { password: 0 });
    return result;
};
const medicineOverviewServices = async () => {
    const totalOrder = await payment_modal_1.OrderModel.find().countDocuments();
    const pendingOrder = await payment_modal_1.OrderModel.find().countDocuments({
        status: "pending",
    });
    const totalMedicine = await medicineModel_1.medicineModel.aggregate([
        {
            $group: {
                _id: null,
                totalStock: { $sum: "$stock_availability" },
            },
        },
    ]);
    return {
        totalOrder,
        pendingOrder,
        totalMedicine,
    };
};
exports.userServices = {
    createUserServices,
    getSingalUserServices,
    medicineOverviewServices,
};
