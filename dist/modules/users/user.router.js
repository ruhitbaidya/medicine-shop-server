"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("./user.controler");
const user_validation_1 = require("./user.validation");
const userValidation_1 = require("../../middleware/userValidation");
const adminTokenVerify_1 = require("../auth/adminTokenVerify");
const router = express_1.default.Router();
router.post("/create-user", (0, userValidation_1.validateSchema)(user_validation_1.userValidation), user_controler_1.userControler.createUserControler);
router.get("/getUser/:email", user_controler_1.userControler.getSiUserControler);
router.get("/overview", adminTokenVerify_1.adminverifyUser, user_controler_1.userControler.medicineOverViewControler);
router.get("/getallUser", user_controler_1.userControler.getAllUserControler);
router.get("/getuserorder/:id", user_controler_1.userControler.getAlluserInfoOrder);
router.post("/updateUser", user_controler_1.userControler.updateUserControler);
exports.userRouter = router;
