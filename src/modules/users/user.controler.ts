import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createUserControler = catchAsyncFun(async (req, res) => {
  const result = await userServices.createUserServices(req.body);
  sendResponse(res, {
    status: 202,
    message: "User Create Successfully",
    data: result,
  });
});

export const userControler = {
  createUserControler,
};
