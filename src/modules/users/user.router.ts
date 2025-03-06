import express from "express";
import { userControler } from "./user.controler";

import { userValidation } from "./user.validation";
import { validateSchema } from "../../middleware/userValidation";

const router = express.Router();

router.post(
  "/create-user",
  validateSchema(userValidation),
  userControler.createUserControler
);

router.get("/getUser/:email", userControler.getSiUserControler);
export const userRouter = router;
