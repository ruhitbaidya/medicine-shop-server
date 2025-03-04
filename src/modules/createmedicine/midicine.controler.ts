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
export const medicineControler = {
  createMedicineControler,
  getAllMedicineControler,
  updateMedicineControler,
  getSingalMedicineControler,
  medicineDeleteServices,
};
