import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

// This function will validate the request body based on the provided schema
export const validateSchema = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate the request body using the provided schema
      await schema.parseAsync(req.body);
      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        // Handle Zod validation error
        const formattedErrors = error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));
        res.status(400).json({ errors: formattedErrors });
      } else {
        // Handle unexpected errors
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};
