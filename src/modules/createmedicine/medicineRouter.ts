import express from "express";
import { medicineControler } from "./midicine.controler";

import MedicineFormDataSchema from "./medicineValidation";
import { validateSchema } from "../../middleware/userValidation";
import { verifyUser } from "../auth/usertokenVerify";
import { adminverifyUser } from "../auth/adminTokenVerify";

const router = express.Router();

router.post(
  "/create-medicine",
  validateSchema(MedicineFormDataSchema),
  adminverifyUser,
  medicineControler.createMedicineControler
);
router.patch(
  "/update-medicine/:id",
  adminverifyUser,
  medicineControler.updateMedicineControler
);
router.get("/get-medicine", medicineControler.getAllMedicineControler);
router.get(
  "/getSingalMedicine/:id",
  medicineControler.getSingalMedicineControler
);

router.post("/filter", medicineControler.filterMedicineControler);
router.delete(
  "/delete-medicne/:id",
  adminverifyUser,
  medicineControler.medicineDeleteServices
);
router.get("/search/:text", medicineControler.medicineSearchControler);
export const medicineRouter = router;
