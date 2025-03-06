import { NextFunction, Request, Response } from "express";
import { jwtDecode } from "jwt-decode";
import { userModel } from "../users/user.model";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  email: string;
  role: string;
}

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ success: false, message: "Unauthorized user" });
    }

    const users = jwtDecode<CustomJwtPayload>(token as string);
    if (!users.email) {
      res.status(400).json({ success: false, message: "Invalid token" });
    }

    const findUser = await userModel.findOne({ email: users.email });
    if (!findUser) {
      res.status(404).json({ success: false, message: "User not found" });
    }

    if (findUser?.role !== "customer") {
      res.status(403).json({ success: false, message: "Access denied" });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
