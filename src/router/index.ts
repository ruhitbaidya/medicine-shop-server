import express from "express";
import { userRouter } from "../modules/users/user.router";
import { login } from "../modules/auth/user.login.router";
import { medicineRouter } from "../modules/createmedicine/medicineRouter";
import { paymentRoute } from "../modules/payment/payment.router";
import { blogRouter } from "../modules/blogs/blogs.router";
import { subscribeRouter } from "../modules/subscribe/subscribe.router";
import { chartRouter } from "../modules/admin/admin.router.controler";
import { productReviewRouter } from "../modules/productReview/review.router";

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
  {
    path: "/",
    rout: blogRouter,
  },
  {
    path: "/",
    rout: subscribeRouter,
  },
  {
    path: "/",
    rout: chartRouter,
  },
  {
    path: "/",
    rout: productReviewRouter,
  },
];

routes.forEach((item) => rootRouter.use(`/api/v1${item.path}`, item.rout));

export default rootRouter;
