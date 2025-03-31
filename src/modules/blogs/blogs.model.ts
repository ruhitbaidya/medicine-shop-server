import { model, Schema } from "mongoose";
import { TBlog } from "./blogs.interface";

const blogSchema = new Schema<TBlog>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const blogModel = model<TBlog>("blogs", blogSchema);
