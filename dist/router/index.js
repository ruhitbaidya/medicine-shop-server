"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../modules/users/user.router");
const user_login_router_1 = require("../modules/auth/user.login.router");
const medicineRouter_1 = require("../modules/createmedicine/medicineRouter");
const payment_router_1 = require("../modules/payment/payment.router");
const blogs_router_1 = require("../modules/blogs/blogs.router");
const subscribe_router_1 = require("../modules/subscribe/subscribe.router");
const admin_router_controler_1 = require("../modules/admin/admin.router.controler");
const rootRouter = express_1.default.Router();
const routes = [
    {
        path: "/",
        rout: user_router_1.userRouter,
    },
    {
        path: "/auth",
        rout: user_login_router_1.login,
    },
    {
        path: "/",
        rout: medicineRouter_1.medicineRouter,
    },
    {
        path: "/",
        rout: payment_router_1.paymentRoute,
    },
    {
        path: "/",
        rout: blogs_router_1.blogRouter,
    },
    {
        path: "/",
        rout: subscribe_router_1.subscribeRouter,
    },
    {
        path: "/",
        rout: admin_router_controler_1.chartRouter,
    },
];
routes.forEach((item) => rootRouter.use(`/api/v1${item.path}`, item.rout));
exports.default = rootRouter;
