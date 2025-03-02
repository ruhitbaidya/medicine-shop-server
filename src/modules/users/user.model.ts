import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";

const UserSchema = new Schema<Tuser>({
  email: {
    type: String,
    required: [true, "Your Must Provied Your Email"],
  },
  phone: {
    type: String,
    required: [true, "Your Must Provied Your Phone"],
  },
  password: {
    type: String,
    required: [true, "Your Must Provied Your Password"],
  },
  role: {
    type: String,
    default: "customer",
  },
});

export const userModel = model("allUser", UserSchema);
