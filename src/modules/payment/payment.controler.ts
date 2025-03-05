import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
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
export const paymentControler = {
  createPaymentControler,
  createOrderControler,
};
