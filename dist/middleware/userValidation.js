"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const zod_1 = require("zod");
// This function will validate the request body based on the provided schema
const validateSchema = (schema) => {
    return async (req, res, next) => {
        try {
            // Validate the request body using the provided schema
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                // Handle Zod validation error
                const formattedErrors = error.errors.map((err) => ({
                    path: err.path.join("."),
                    message: err.message,
                }));
                res.status(400).json({ errors: formattedErrors });
            }
            else {
                // Handle unexpected errors
                res.status(500).json({ error: "Internal server error" });
            }
        }
    };
};
exports.validateSchema = validateSchema;
