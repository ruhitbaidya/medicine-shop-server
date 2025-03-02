import { Response } from "express";
type TResponse = {
  status: number;
  message: string;
  data: any | null;
};
export const sendResponse = (res: Response, data: TResponse) => {
  return res.status(data?.status).json({
    message: data?.message,
    data: data?.data,
  });
};
