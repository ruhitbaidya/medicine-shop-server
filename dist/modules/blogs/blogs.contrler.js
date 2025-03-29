"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogControler = void 0;
const asyncFun_1 = require("../../utils/asyncFun");
const sendResponse_1 = require("../../utils/sendResponse");
const blogs_services_1 = require("./blogs.services");
const blogCreateControler = (0, asyncFun_1.catchAsyncFun)(async (req, res) => {
    const result = await blogs_services_1.blogServices.blogCreateServices(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        status: 200,
        message: "Blog Create Success",
        data: result
    });
});
exports.blogControler = {
    blogCreateControler
};
