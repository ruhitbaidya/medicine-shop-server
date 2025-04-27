import express from "express";
import { userControler } from "./user.controler";

import { userValidation } from "./user.validation";
import { validateSchema } from "../../middleware/userValidation";
import { adminverifyUser } from "../auth/adminTokenVerify";

const router = express.Router();

router.post(
  "/create-user",
  validateSchema(userValidation),
  userControler.createUserControler
);
router.get("/getUser/:email", userControler.getSiUserControler);
router.get(
  "/overview",
  adminverifyUser,
  userControler.medicineOverViewControler
);
router.get("/getallUser", userControler.getAllUserControler);
router.get("/getuserorder/:id", userControler.getAlluserInfoOrder);
router.post("/updateUser", userControler.updateUserControler);
export const userRouter = router;
