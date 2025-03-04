import express from "express";
import { medicineControler } from "./midicine.controler";

import MedicineFormDataSchema from "./medicineValidation";
import { validateSchema } from "../../middleware/userValidation";

const router = express.Router();

router.post(
  "/create-medicine",
  validateSchema(MedicineFormDataSchema),
  medicineControler.createMedicineControler
);

router.get("/get-medicine", medicineControler.getAllMedicineControler);
export const medicineRouter = router;
