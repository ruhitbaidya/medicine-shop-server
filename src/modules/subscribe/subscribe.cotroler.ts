import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { subscribeModel } from "./subscribe.model";
import { subscribeServices } from "./subscribe.services";

const createSubscribeControler = catchAsyncFun(async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  const findEmail = await subscribeModel.findOne({ email });
  console.log(findEmail);
  if (findEmail) {
    console.log("get");
    sendResponse(res, {
      status: 200,
      message: "This Email Already Exist",
      data: {},
    });
  } else {
    console.log("wrong");
    const result = await subscribeServices.createSubscribeServices(req.body);
    sendResponse(res, {
      status: 200,
      message: "Sucessfully Subscribe",
      data: result,
    });
  }
});

const getAllSubscribeControler = catchAsyncFun(async (req, res) => {
  const result = await subscribeServices.getAllSubscribeServices();
  sendResponse(res, {
    status: 200,
    message: "Get All Subscribe",
    data: result,
  });
});

const getSingalSubscribeControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await subscribeServices.getSingalSubscribeServices(id);
  sendResponse(res, {
    status: 200,
    message: "Get Singal Subscribe",
    data: result,
  });
});

const deleteSubscribeControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await subscribeServices.deleteSubscribeServices(id);
  sendResponse(res, {
    status: 200,
    message: "Delete Successfully Subscribe",
    data: result,
  });
});

export const subscribeControler = {
  createSubscribeControler,
  getAllSubscribeControler,
  getSingalSubscribeControler,
  deleteSubscribeControler,
};
