"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicineServices = void 0;
const medicineModel_1 = require("./medicineModel");
const medicineCreateServices = async (data) => {
    const result = await medicineModel_1.medicineModel.create(data);
    return result;
};
const medicineUpdateServices = async (id, data) => {
    const result = await medicineModel_1.medicineModel.findByIdAndUpdate(id, { $set: data }, { new: true });
    return result;
};
const medicineGetSingalServices = async (id) => {
    const result = await medicineModel_1.medicineModel.findOne({ _id: id });
    return result;
};
const filterMedicineServices = async (data) => {
    let filter = {};
    let sort = {};
    if (data.sort === "htl") {
        sort = { price: -1 };
    }
    if (data.sort === "lth") {
        sort = { price: 1 };
    }
    if (data.category) {
        filter = { "manufacturer_details.name": data.category };
    }
    if (data.pcheck === true) {
        filter = { required_prescription: data.pcheck };
    }
    if (data.pcheck === false) {
        filter = { required_prescription: data.pcheck };
    }
    if (data.h || data.l) {
        const minPrice = parseInt(data.l);
        const maxPrice = parseInt(data.h);
        filter = {
            price: { $gte: minPrice, $lte: maxPrice }, // Corrected: minPrice should be used with $gte, and maxPrice with $lte
        };
    }
    const result = await medicineModel_1.medicineModel.find(filter).sort(sort);
    return result;
};
exports.medicineServices = {
    medicineCreateServices,
    medicineUpdateServices,
    medicineGetSingalServices,
    filterMedicineServices,
};
