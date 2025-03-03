import express from "express";
import { userControler } from "./user.controler";
import { userValidationSchema } from "../../middleware/userValidation";
import { userValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/",
  userValidationSchema(userValidation),
  userControler.createUserControler
);

export const userRouter = router;
