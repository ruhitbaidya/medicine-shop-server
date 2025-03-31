import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { blogModel } from "./blogs.model";
import { blogServices } from "./blogs.services";

const blogCreateControler = catchAsyncFun(async (req, res) => {
  const result = await blogServices.blogCreateServices(req.body);
  sendResponse(res, {
    status: 200,
    message: "Blog Create Success",
    data: result,
  });
});

const getAllBlogsControler = catchAsyncFun(async (req, res) => {
  const result = await blogModel.find();
  sendResponse(res, {
    status: 200,
    message: "Get All Blogs",
    data: result,
  });
});

const deleteBlogsControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await blogServices.deleteBlogsServices(id);
  sendResponse(res, {
    status: 200,
    message: "Delete Blogs",
    data: result,
  });
});

const updateBlogsControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await blogServices.updateBlogsServices(id, data);
  sendResponse(res, {
    status: 200,
    message: "Update Blogs",
    data: result,
  });
});

export const blogControler = {
  blogCreateControler,
  getAllBlogsControler,
  deleteBlogsControler,
  updateBlogsControler,
};
