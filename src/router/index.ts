import express from "express";
import { userRouter } from "../modules/users/user.router";
import { login } from "../modules/auth/user.login.router";

const rootRouter = express.Router();

const routes = [
  {
    path: "/create-user",
    rout: userRouter,
  },
  {
    path: "/auth",
    rout: login,
  },
];

routes.forEach((item) => rootRouter.use(`/api/v1${item.path}`, item.rout));

export default rootRouter;
