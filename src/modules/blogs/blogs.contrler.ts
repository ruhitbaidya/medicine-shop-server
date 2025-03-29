import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { blogServices } from "./blogs.services";


const blogCreateControler = catchAsyncFun(async(req , res)=>{
    const result = await blogServices.blogCreateServices(req.body)
    sendResponse(res, {
        status : 200,
        message : "Blog Create Success",
        data : result
    })
})


export const blogControler = {
    blogCreateControler
}