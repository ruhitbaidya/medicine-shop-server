import { catchAsyncFun } from "../../utils/asyncFun";
import { sendResponse } from "../../utils/sendResponse";
import { productReviewServices } from "./review.services";

const createProductReviewControler = catchAsyncFun(async(req , res)=>{
    const data = req.body;
    const result = await productReviewServices.createproductReviewServices(data);
    sendResponse(res, {
        status : 200,
        message : "Review Submit",
        data : result
    })
})

const getAllReviewControler = catchAsyncFun(async(req , res)=>{
    const result = await productReviewServices.getAllProductReviewServices()
    sendResponse(res, {
        status : 200,
        message : "get All Review",
        data : result
    })
})


export const reviewControler = {
    createProductReviewControler,
    getAllReviewControler
}