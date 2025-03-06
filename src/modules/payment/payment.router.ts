import express from "express";
import { paymentControler } from "./payment.controler";
import { verifyUser } from "../auth/usertokenVerify";
import { adminverifyUser } from "../auth/adminTokenVerify";

const router = express.Router();

router.post("/paymentInfo", paymentControler.createPaymentControler);
router.post("/order", paymentControler.createOrderControler);
router.get("/getOrder", paymentControler.getAllOrderControler);
router.patch(
  "/updatestatus",
  adminverifyUser,
  paymentControler.updateOrderStatus
);
router.get("/getIdOrder/:id", paymentControler.getSpeaceOrder);
export const paymentRoute = router;
