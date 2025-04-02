import { TReview } from "./review.interface";
import { reviewModel } from "./review.model";


const createproductReviewServices = async(data : TReview)=>{
    const result = reviewModel.create(data);
    return result
}


const getAllProductReviewServices = async()=>{
    const result = reviewModel.find();
    return result
}


export const productReviewServices = {
    createproductReviewServices,
    getAllProductReviewServices
}