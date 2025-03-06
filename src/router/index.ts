import express from "express";
import { userRouter } from "../modules/users/user.router";
import { login } from "../modules/auth/user.login.router";
import { medicineRouter } from "../modules/createmedicine/medicineRouter";
import { paymentRoute } from "../modules/payment/payment.router";

const rootRouter = express.Router();

const routes = [
  {
    path: "/",
    rout: userRouter,
  },
  {
    path: "/auth",
    rout: login,
  },
  {
    path: "/",
    rout: medicineRouter,
  },
  {
    path: "/",
    rout: paymentRoute,
  },
];

routes.forEach((item) => rootRouter.use(`/api/v1${item.path}`, item.rout));

export default rootRouter;
