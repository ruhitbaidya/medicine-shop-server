import jwt from "jsonwebtoken";
import { config } from "../../config/config";

export const createToken = async (data: { email: string; role: string }) => {
  const token = jwt.sign(data, config.tokenSecrate as string, {
    expiresIn: "1d",
  });
  return token;
};
