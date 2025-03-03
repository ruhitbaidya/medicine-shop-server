import express from "express";
import { userLogin } from "./user.login";

const router = express.Router();

router.post("/", userLogin);

export const login = router;
