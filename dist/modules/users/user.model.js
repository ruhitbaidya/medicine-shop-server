"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const ConstErr_1 = require("../../error/ConstErr");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Your Must Provied Your Name"],
    },
    email: {
        type: String,
        required: [true, "Your Must Provied Your Email"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Your Must Provied Your Phone"],
    },
    password: {
        type: String,
        required: [true, "Your Must Provied Your Password"],
    },
    role: {
        type: String,
        default: "customer",
    },
});
UserSchema.pre("save", async function (next) {
    const result = await exports.userModel.findOne({ email: this.email });
    if (result) {
        throw new ConstErr_1.CuError("This Email Already Exist", 405);
    }
    next();
});
exports.userModel = (0, mongoose_1.model)("allUser", UserSchema);
