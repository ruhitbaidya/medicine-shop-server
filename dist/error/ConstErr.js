"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuError = void 0;
class CuError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "CuError";
    }
}
exports.CuError = CuError;
