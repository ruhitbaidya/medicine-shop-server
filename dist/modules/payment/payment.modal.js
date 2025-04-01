"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const MedicineScheme = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "medicine",
    },
    quantity: {
        type: String,
        required: true,
    },
});
const ShippingAddr = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});
const OrderSchema = new mongoose_1.Schema({
    medicine: [MedicineScheme],
    orderId: {
        type: String,
        required: true,
    },
    payment: {
        type: Number,
        required: true,
    },
    shippingAddress: ShippingAddr,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "allUser",
    },
    status: {
        type: String,
        default: "pending",
    },
    prescription: {
        type: String,
    },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)("order", OrderSchema);
// medicine:[ {id: '67c714ba6921a70e16ae6678', quantity: 1}
// {id: '67c714ba6921a70e16ae6677', quantity: 1}],
// orderId: "pi_3QzWzlCZsyVMtq3p1C6VArMN"
// shippingAddrese: {name: 'Ruhit Baidya', address: '12/15', city: 'Sreemangal', postalCode: '3210', phone: '01742772705'}
// user: "67c59b47008053c64b1d7064"
