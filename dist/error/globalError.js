"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const zod_1 = require("zod");
const globalError = (err, req, res, next) => {
    if (err instanceof zod_1.z.ZodError) {
        const errorMessages = err.errors
            .map((err) => `${err.path[0]}: ${err.message}`)
            .join(", ");
        return res.status(406).json({ error: errorMessages });
    }
    console.error("Unexpected error:", err);
    return res
        .status(500)
        .json({ message: err.message || "Internal Server Error" });
};
exports.globalError = globalError;
