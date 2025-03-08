"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicineRouter = void 0;
const express_1 = __importDefault(require("express"));
const midicine_controler_1 = require("./midicine.controler");
const medicineValidation_1 = __importDefault(require("./medicineValidation"));
const userValidation_1 = require("../../middleware/userValidation");
const adminTokenVerify_1 = require("../auth/adminTokenVerify");
const router = express_1.default.Router();
router.post("/create-medicine", (0, userValidation_1.validateSchema)(medicineValidation_1.default), adminTokenVerify_1.adminverifyUser, midicine_controler_1.medicineControler.createMedicineControler);
router.patch("/update-medicine/:id", adminTokenVerify_1.adminverifyUser, midicine_controler_1.medicineControler.updateMedicineControler);
router.get("/get-medicine", midicine_controler_1.medicineControler.getAllMedicineControler);
router.get("/getSingalMedicine/:id", midicine_controler_1.medicineControler.getSingalMedicineControler);
router.post("/filter", midicine_controler_1.medicineControler.filterMedicineControler);
router.delete("/delete-medicne/:id", adminTokenVerify_1.adminverifyUser, midicine_controler_1.medicineControler.medicineDeleteServices);
router.get("/search/:text", midicine_controler_1.medicineControler.medicineSearchControler);
exports.medicineRouter = router;
