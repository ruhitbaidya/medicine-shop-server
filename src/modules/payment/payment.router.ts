import express from "express";
import { paymentControler } from "./payment.controler";

const router = express.Router();

router.post("/paymentInfo", paymentControler.createPaymentControler);
router.post("/order", paymentControler.createOrderControler);
export const paymentRoute = router;
