import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { medicineModel } from "./medicineModel";
import { medicineServices } from "./medicineServices";

const createMedicineControler = catchAsyncFun(async (req, res) => {
  const result = await medicineServices.medicineCreateServices(req.body);
  sendResponse(res, {
    status: 200,
    message: "Medicine Create Succesfully",
    data: result,
  });
});

const getAllMedicineControler = catchAsyncFun(async (req, res) => {
  const result = await medicineModel.find();
  sendResponse(res, {
    status: 200,
    message: "Get All Medicine",
    data: result,
  });
});

const updateMedicineControler = catchAsyncFun(async (req, res) => {
  const result = await medicineServices.medicineUpdateServices(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    status: 200,
    message: "Medicine Update Successfully",
    data: result,
  });
});

const getSingalMedicineControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;

  const result = await medicineServices.medicineGetSingalServices(id);

  if (!result) {
    sendResponse(res, {
      status: 404,
      message: "Medicine Not Found",
      data: null,
    });
  }
  if (result) {
    sendResponse(res, {
      status: 200,
      message: "Get Data Successfully",
      data: result,
    });
  }
});

const medicineDeleteServices = catchAsyncFun(async (req, res) => {
  const { id } = req.params;
  const result = await medicineModel.deleteOne({ _id: id });
  sendResponse(res, {
    status: 200,
    message: "Medicine Delete Successfully",
    data: result,
  });
});

const filterMedicineControler = catchAsyncFun(async (req, res) => {
  console.log(req.body);
  const result = await medicineServices.filterMedicineServices(req.body);
  sendResponse(res, {
    status: 200,
    message: "Data Filter Success",
    data: result,
  });
});

const medicineSearchControler = catchAsyncFun(async (req, res) => {
  const query = req.params.text;
  const result = await medicineModel.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
      { "manufacturer_details.name": { $regex: query, $options: "i" } },
    ],
  });
  sendResponse(res, {
    status: 200,
    message: "search medicine",
    data: result,
  });
});

const highRatePriceMedicineControler = catchAsyncFun(async (req, res) => {
  const result = await medicineServices.hightRateMedicineServices();
  sendResponse(res, {
    status: 200,
    message: "Get High Rate Medicne",
    data: result,
  });
});

const makeDiscountMedicineControler = catchAsyncFun(async (req, res) => {
  const { medicineId, discount } = req.body;
  const result = await medicineServices.makeDiscountMedicineServices(
    medicineId,
    discount
  );
  sendResponse(res, {
    status: 200,
    message: "set All Discount medicine",
    data: result,
  });
});

const discountMedicineControler = catchAsyncFun(async (req, res) => {
  const result = await medicineServices.discountMedicineServices();
  sendResponse(res, {
    status: 200,
    message: "Get All Discount medicine",
    data: result,
  });
});
export const medicineControler = {
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
};
