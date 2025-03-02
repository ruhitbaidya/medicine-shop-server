import express from "express";
import { userRouter } from "../modules/users/user.router";
const app = express();
const router = express.Router();

const routes = [
  {
    path: "/user",
    rout: userRouter,
  },
];

routes.forEach((item) => app.use(item.path, item.rout));

export const rootRouter = router;
