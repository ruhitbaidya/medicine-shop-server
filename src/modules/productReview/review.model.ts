import { model, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pid: {
      type: Schema.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const reviewModel = model("productReview", reviewSchema);
