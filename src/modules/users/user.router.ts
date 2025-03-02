import express, { Router } from "express";
import { userControler } from "./user.controler";

const router = express.Router();

router.get("/create-user", userControler.createUserControler);

export const userRouter = router;
