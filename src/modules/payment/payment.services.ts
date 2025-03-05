import Stripe from "stripe";
import { IMedicine, TPayment } from "./payment.interface";
import OrderModel from "./payment.modal";
const stripe = new Stripe(process.env.SECRATE_KEY as string);
const createPaymentInfoServices = async (amount: number) => {
  try {
    const paymentInt = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return { clientSecret: paymentInt };
  } catch (err) {
    console.error(err);
  }
};

const confirmPaymentOrederServices = async (data: IMedicine) => {
  const result = await OrderModel.create(data);
  return result;
};
export const paymentServices = {
  createPaymentInfoServices,
  confirmPaymentOrederServices,
};
