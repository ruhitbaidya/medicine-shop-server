import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { medicineServices } from "../createmedicine/medicineServices";
import { OrderModel } from "../payment/payment.modal";
import { userModel } from "./user.model";
import { userServices } from "./user.services";

const createUserControler = catchAsyncFun(async (req, res) => {
  const result = await userServices.createUserServices(req.body);
  sendResponse(res, {
    status: 202,
    message: "User Create Successfully",
    data: result,
  });
});

const getSiUserControler = catchAsyncFun(async (req, res) => {
  const email = req.params.email;
  console.log(email);
  const result = await userServices.getSingalUserServices(email);
  sendResponse(res, {
    status: 202,
    message: "User Get Successfully",
    data: result,
  });
});

const medicineOverViewControler = catchAsyncFun(async (req, res) => {
  const result = await userServices.medicineOverviewServices();
  sendResponse(res, {
    status: 200,
    message: "get all info",
    data: result,
  });
});
const getAllUserControler = catchAsyncFun(async (req, res) => {
  const result = await userModel.find();
  sendResponse(res, {
    status: 200,
    message: "Get all user",
    data: result,
  });
});

const getAlluserInfoOrder = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await OrderModel.find(
    { user: id },
    { shippingAddress: 0 }
  ).populate("medicine.id");
  sendResponse(res, {
    status: 200,
    message: "get order ",
    data: result,
  });
});

const updateUserControler = catchAsyncFun(async (req, res) => {
  const { id, name, email, phone } = req.body;
  const result = await userModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
      },
    }
  );
  sendResponse(res, {
    status: 200,
    message: "User Update success",
    data: result,
  });
});

export const userControler = {
  createUserControler,
  getSiUserControler,
  medicineOverViewControler,
  getAllUserControler,
  getAlluserInfoOrder,
  updateUserControler,
};
