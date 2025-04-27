import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import rootRouter from "./router";
import { ZodError } from "zod";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ message: "This Is My Get Request" });
});
app.use(rootRouter);
const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ZodError) {
    const firstError = err.errors[0];
    res.status(400).json({
      statusCode: 400,
      errorCode: firstError.code,
      errorMessage: `The ${firstError.path.join(".")} format is invalid.`,
    });
  } else {
    res.status(err.status || 500).json({
      statusCode: err.status || 500,
      errorCode: "server_error",
      errorMessage: err.message || "Internal Server Error",
    });
  }
};

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalError(err, req, res, next);
});

export default app;
