import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<any> | void => {
  if (err instanceof z.ZodError) {
    const errorMessages = err.errors
      .map((err: any) => `${err.path[0]}: ${err.message}`)
      .join(", ");
    return res.status(406).json({ error: errorMessages });
  }

  console.error("Unexpected error:", err);
  return res
    .status(500)
    .json({ message: err.message || "Internal Server Error" });
};
