import express from "express";
import { reviewControler } from "./review.controler";

const router = express.Router();

router.post("/create-review", reviewControler.createProductReviewControler)
router.get("/get-all-review", reviewControler.getAllReviewControler)

export const productReviewRouter = router