import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";

const createUserControler = catchAsyncFun((req, res) => {
  sendResponse(res, {
    status: 202,
    message: "this email found",
    data: { founder: "Ruhit baidya" },
  });
});

export const userControler = {
  createUserControler,
};
