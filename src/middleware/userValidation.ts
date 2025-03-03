import { NextFunction, Request, Response } from "express";

export const userValidationSchema = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ error: error.errors });
    }
  };
};
