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
router.patch("/update-medicine/:id", medicineControler.updateMedicineControler);
router.get("/get-medicine", medicineControler.getAllMedicineControler);
router.get(
  "/getSingalMedicine/:id",
  medicineControler.getSingalMedicineControler
);
router.delete("/delete-medicne/:id", medicineControler.medicineDeleteServices);
export const medicineRouter = router;
