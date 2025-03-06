import { config } from "../../config/config";
import { medicineModel } from "../createmedicine/medicineModel";
import { OrderModel } from "../payment/payment.modal";
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
const medicineOverviewServices = async () => {
  const totalOrder = await OrderModel.find().countDocuments();
  const pendingOrder = await OrderModel.find().countDocuments({
    status: "pending",
  });
  const totalMedicine = await medicineModel.aggregate([
    {
      $group: {
        _id: null,
        totalStock: { $sum: "$stock_availability" },
      },
    },
  ]);

  return {
    totalOrder,
    pendingOrder,
    totalMedicine,
  };
};
export const userServices = {
  createUserServices,
  getSingalUserServices,
  medicineOverviewServices,
};
