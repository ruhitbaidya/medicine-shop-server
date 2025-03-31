import { TBlog } from "./blogs.interface";
import { blogModel } from "./blogs.model";

const blogCreateServices = async (data: TBlog) => {
  const result = await blogModel.create(data);
  return result;
};

const deleteBlogsServices = async (id: string) => {
  const result = await blogModel.deleteOne({ _id: id });
  return result;
};

const updateBlogsServices = async (
  id: string,
  data: { title: string; description: string }
) => {
  const result = await blogModel.updateOne({ _id: id }, { $set: { data } });
  return result;
};

export const blogServices = {
  blogCreateServices,
  deleteBlogsServices,
  updateBlogsServices,
};
