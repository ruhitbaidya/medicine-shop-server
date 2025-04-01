import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { medicineModel } from "../createmedicine/medicineModel";
import { OrderModel } from "../payment/payment.modal";
import { subscribeModel } from "../subscribe/subscribe.model";
import { userModel } from "../users/user.model";

export const adminChartControler = catchAsyncFun(async (req, res) => {
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const manths = date.getMonth();
  const month = shortMonths[manths];
  const orders = await OrderModel.find().countDocuments();
  const users = await userModel.find().countDocuments();
  const subscriptions = await subscribeModel.find().countDocuments();
  const products = await medicineModel.find().countDocuments();

  sendResponse(res, {
    status: 200,
    message: "get all details",
    data: [{ month, orders, users, subscriptions, products }],
  });
});
