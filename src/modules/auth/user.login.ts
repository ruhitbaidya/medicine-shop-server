import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { userModel } from "../users/user.model";
import bcrypt from "bcrypt";
import { createToken } from "./createToken";
export const userLogin = catchAsyncFun(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    bcrypt.compare(password, findUser.password, async function (err, result) {
      if (result) {
        const token = await createToken({
          email: findUser.email,
          role: findUser.role,
        });
        sendResponse(res, {
          status: 200,
          message: "Successfully Login",
          data: token,
        });
      } else {
        sendResponse(res, {
          status: 405,
          message: "Unauthrize User",
          data: null,
        });
      }
    });
  } else {
    sendResponse(res, {
      status: 405,
      message: "Unauthrize User",
      data: null,
    });
  }
});
