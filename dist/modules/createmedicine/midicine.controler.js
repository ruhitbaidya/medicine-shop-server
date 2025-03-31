"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicineControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const medicineModel_1 = require("./medicineModel");
const medicineServices_1 = require("./medicineServices");
const createMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await medicineServices_1.medicineServices.medicineCreateServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Medicine Create Succesfully",
        data: result,
    });
});
const getAllMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await medicineModel_1.medicineModel.find();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get All Medicine",
        data: result,
    });
});
const updateMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await medicineServices_1.medicineServices.medicineUpdateServices(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Medicine Update Successfully",
        data: result,
    });
});
const getSingalMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await medicineServices_1.medicineServices.medicineGetSingalServices(id);
    if (!result) {
        (0, sendResponse_1.sendResponse)(res, {
            status: 404,
            message: "Medicine Not Found",
            data: null,
        });
    }
    if (result) {
        (0, sendResponse_1.sendResponse)(res, {
            status: 200,
            message: "Get Data Successfully",
            data: result,
        });
    }
});
const medicineDeleteServices = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { id } = req.params;
    const result = await medicineModel_1.medicineModel.deleteOne({ _id: id });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Medicine Delete Successfully",
        data: result,
    });
});
const filterMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    console.log(req.body);
    const result = await medicineServices_1.medicineServices.filterMedicineServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Data Filter Success",
        data: result,
    });
});
const medicineSearchControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const query = req.params.text;
    const result = await medicineModel_1.medicineModel.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            { "manufacturer_details.name": { $regex: query, $options: "i" } },
        ],
    });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "search medicine",
        data: result,
    });
});
const highRatePriceMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await medicineServices_1.medicineServices.hightRateMedicineServices();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get High Rate Medicne",
        data: result,
    });
});
const makeDiscountMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { medicineId, discount } = req.body;
    const result = await medicineServices_1.medicineServices.makeDiscountMedicineServices(medicineId, discount);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "set All Discount medicine",
        data: result,
    });
});
const removeDiscountMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const { medicineId } = req.body;
    const result = await medicineServices_1.medicineServices.removeDiscountMedicineServices(medicineId);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Remove All Discount medicine",
        data: result,
    });
});
const discountMedicineControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await medicineServices_1.medicineServices.discountMedicineServices();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get All Discount medicine",
        data: result,
    });
});
exports.medicineControler = {
    createMedicineControler,
    getAllMedicineControler,
    updateMedicineControler,
    getSingalMedicineControler,
    medicineDeleteServices,
    filterMedicineControler,
    medicineSearchControler,
    highRatePriceMedicineControler,
    discountMedicineControler,
    makeDiscountMedicineControler,
    removeDiscountMedicineControler
};
