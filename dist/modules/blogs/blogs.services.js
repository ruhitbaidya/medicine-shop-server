"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const blogs_model_1 = require("./blogs.model");
const blogCreateServices = async (data) => {
    const result = await blogs_model_1.blogModel.create(data);
    return result;
};
exports.blogServices = {
    blogCreateServices
};
