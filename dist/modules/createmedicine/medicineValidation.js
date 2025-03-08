"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ManufacturerDetailsSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Manufacturer name is required"),
    address: zod_1.z.string().min(1, "Manufacturer address is required"),
    contact: zod_1.z.string().min(1, "Manufacturer contact is required"),
});
const MedicineFormDataSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Medicine name is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.preprocess((val) => (typeof val === "string" ? parseFloat(val) : val), zod_1.z.number().min(0, "Price must be a positive number")),
    stock_availability: zod_1.z.preprocess((val) => (typeof val === "string" ? parseFloat(val) : val), zod_1.z.number().min(0, "Stock must be a positive number")),
    required_prescription: zod_1.z.preprocess((val) => (val === "true" ? true : val === "false" ? false : val), zod_1.z.boolean()),
    manufacturer_details: ManufacturerDetailsSchema,
    expiry_date: zod_1.z.string().min(1, "Expiry date is required"),
});
exports.default = MedicineFormDataSchema;
