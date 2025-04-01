import { Types } from "mongoose";

export type TReview = {
  comment: string;
  name: string;
  pid: Types.ObjectId;
  rating: number;
};
