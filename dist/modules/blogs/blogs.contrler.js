"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const blogs_model_1 = require("./blogs.model");
const blogs_services_1 = require("./blogs.services");
const blogCreateControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await blogs_services_1.blogServices.blogCreateServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Blog Create Success",
        data: result,
    });
});
const getAllBlogsControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await blogs_model_1.blogModel.find();
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Get All Blogs",
        data: result,
    });
});
const getSingalBlogControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await blogs_model_1.blogModel.findOne({ _id: id });
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Delete Blogs",
        data: result,
    });
});
const deleteBlogsControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const result = await blogs_services_1.blogServices.deleteBlogsServices(id);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Delete Blogs",
        data: result,
    });
});
const updateBlogsControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await blogs_services_1.blogServices.updateBlogsServices(id, data);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Update Blogs",
        data: result,
    });
});
exports.blogControler = {
    blogCreateControler,
    getAllBlogsControler,
    deleteBlogsControler,
    updateBlogsControler,
    getSingalBlogControler,
};
