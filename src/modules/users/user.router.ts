import express from "express";
import { userControler } from "./user.controler";

import { userValidation } from "./user.validation";
import { validateSchema } from "../../middleware/userValidation";

const router = express.Router();

router.post(
  "/",
  validateSchema(userValidation),
  userControler.createUserControler
);

export const userRouter = router;
