import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import { CuError } from "../../error/ConstErr";

const UserSchema = new Schema<Tuser>({
  name: {
    type: String,
    required: [true, "Your Must Provied Your Name"],
  },
  email: {
    type: String,
    required: [true, "Your Must Provied Your Email"],
    unique: true,
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

UserSchema.pre("save", async function (next) {
  const result = await userModel.findOne({ email: this.email });
  if (result) {
    throw new CuError("This Email Already Exist", 405);
  }
  next();
});

export const userModel = model("allUser", UserSchema);
