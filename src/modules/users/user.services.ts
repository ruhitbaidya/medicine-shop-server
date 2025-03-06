import { config } from "../../config/config";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import bcrypt from "bcrypt";

const createUserServices = async (user: Tuser) => {
  try {
    const saltRounds = Number(config.salt) || 10; // Ensure it's a number
    const salt = await bcrypt.genSalt(saltRounds); // Generate Salt
    const hashedPassword = await bcrypt.hash(user.password, salt); // Hash Password

    user.password = hashedPassword; // Store hashed password

    const result = await userModel.create(user); // Save to database
    return result;
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};

const getSingalUserServices = async (email: string) => {
  const result = await userModel.findOne({ email }, { password: 0 });
  return result;
};
export const userServices = {
  createUserServices,
  getSingalUserServices,
};
