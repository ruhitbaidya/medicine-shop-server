import { catchAsyncFun } from "../../utils/asyncFun";
import { sendMail } from "../../utils/sendMail";

import { sendResponse } from "../../utils/sendResponse";
import { userModel } from "../users/user.model";
import { OrderModel } from "./payment.modal";
import { paymentServices } from "./payment.services";

const createPaymentControler = catchAsyncFun(async (req, res) => {
  const { price } = req.body;
  const result = await paymentServices.createPaymentInfoServices(price);
  sendResponse(res, {
    status: 200,
    message: "Payment Get Data",
    data: result,
  });
});

const createOrderControler = catchAsyncFun(async (req, res) => {
  const result = await paymentServices.confirmPaymentOrederServices(req.body);
  sendResponse(res, {
    status: 200,
    message: "Order Create Sucessfull",
    data: result,
  });
});

const getAllOrderControler = catchAsyncFun(async (req, res) => {
  const result = await OrderModel.find().populate({
    path: "medicine.id",
    model: "medicine",
  });
  console.log(result)
  sendResponse(res, {
    status: 200,
    message: "get all order",
    data: result,
  });
});

const updateOrderStatus = catchAsyncFun(async (req, res) => {
  const data = req.body;
  console.log(data, "this");
  const findOrder = await OrderModel.findOne({ _id: data.id });
  if (findOrder) {
    const findUser = await userModel.findOne({ _id: findOrder?.user });
    if (findUser) {
      sendMail({
        email: findUser?.email,
        text: data?.status,
        name: findUser?.name,
      });
    }
  }
  const result = await OrderModel.findByIdAndUpdate(
    { _id: data.id },
    { $set: { status: data.status } }
  );
  sendResponse(res, {
    status: 200,
    message: "Status Update Successfull",
    data: result,
  });
});

const getSpeaceOrder = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await OrderModel.find({ user: id });
  sendResponse(res, {
    status: 200,
    message: "Get Order",
    data: result,
  });
});
export const paymentControler = {
  createPaymentControler,
  createOrderControler,
  getAllOrderControler,
  updateOrderStatus,
  getSpeaceOrder,
};
