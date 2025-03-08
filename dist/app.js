"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({ message: "This Is My Get Request" });
});
app.use(router_1.default);
const globalError = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        const firstError = err.errors[0];
        res.status(400).json({
            statusCode: 400,
            errorCode: firstError.code,
            errorMessage: `The ${firstError.path.join(".")} format is invalid.`,
        });
    }
    else {
        res.status(err.status || 500).json({
            statusCode: err.status || 500,
            errorCode: "server_error",
            errorMessage: err.message || "Internal Server Error",
        });
    }
};
app.use((err, req, res, next) => {
    globalError(err, req, res, next);
});
exports.default = app;
