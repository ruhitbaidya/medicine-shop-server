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
export const medicineControler = {
  createMedicineControler,
  getAllMedicineControler,
};
