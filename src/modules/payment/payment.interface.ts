import { Types } from "mongoose";

export type TPayment = {
  amount: string;
  customer_name: string;
  email: string;
  phone: string;
  token: string;
};
export type MedicineId = {
  id: Types.ObjectId;
  quantity: string;
};

export type TshippingAdd = {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
};
export type TOrderInterface = {
  medicine: MedicineId[];
  orderId: string;
  shippingAddress: TshippingAdd;
  user: Types.ObjectId;
  status?: "pending" | "process" | "shipping" | "reject" | "success";
  prescription: string | null;
};

// medicine:[ {id: '67c714ba6921a70e16ae6678', quantity: 1}
// {id: '67c714ba6921a70e16ae6677', quantity: 1}],
// orderId: "pi_3QzWzlCZsyVMtq3p1C6VArMN"
// shippingAddrese: {name: 'Ruhit Baidya', address: '12/15', city: 'Sreemangal', postalCode: '3210', phone: '01742772705'}
// user: "67c59b47008053c64b1d7064"
