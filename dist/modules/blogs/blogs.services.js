"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const blogs_model_1 = require("./blogs.model");
const blogCreateServices = async (data) => {
    const result = await blogs_model_1.blogModel.create(data);
    return result;
};
const deleteBlogsServices = async (id) => {
    const result = await blogs_model_1.blogModel.deleteOne({ _id: id });
    return result;
};
const updateBlogsServices = async (id, data) => {
    const result = await blogs_model_1.blogModel.updateOne({ _id: id }, { $set: { data } });
    return result;
};
exports.blogServices = {
    blogCreateServices,
    deleteBlogsServices,
    updateBlogsServices,
};
