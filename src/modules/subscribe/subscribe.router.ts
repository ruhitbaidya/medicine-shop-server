import express from "express";
import { subscribeControler } from "./subscribe.cotroler";
import { validateSchema } from "../../middleware/userValidation";
import { subscribeValidationSchema } from "./subscribe.validation";

const router = express.Router();



router.post("/create-suvscribe", validateSchema(subscribeValidationSchema), subscribeControler.createSubscribeControler);
router.get("/get-all-subscribe", subscribeControler.getAllSubscribeControler);
router.get("/get-singal-subscribe/:id", subscribeControler.getSingalSubscribeControler);
router.delete("/delete-suvscribe/:id", subscribeControler.deleteSubscribeControler);



export const subscribeRouter = router