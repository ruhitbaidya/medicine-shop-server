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
const hightRateMedicineServices = async () => {
    const query = {
        price: { $gt: 4000 },
    };
    const result = await medicineModel_1.medicineModel.find(query).limit(4);
    return result;
};
const makeDiscountMedicineServices = async (medicineId, discount) => {
    if (!medicineId || medicineId.length === 0) {
        throw new Error("Does not send any product id");
    }
    const result = await medicineModel_1.medicineModel.updateMany({ _id: { $in: medicineId } }, { $set: { discountPercentage: discount, discount: true } });
    return result;
};
const discountMedicineServices = async () => {
    const result = await medicineModel_1.medicineModel.find({ discount: true });
    return result;
};
exports.medicineServices = {
    medicineCreateServices,
    medicineUpdateServices,
    medicineGetSingalServices,
    filterMedicineServices,
    hightRateMedicineServices,
    discountMedicineServices,
    makeDiscountMedicineServices,
};
