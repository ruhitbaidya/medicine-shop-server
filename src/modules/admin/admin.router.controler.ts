import express from "express";
import { adminChartControler } from "./admin.controler";

const router = express.Router();

router.get("/admin-chart", adminChartControler);

export const chartRouter = router;
