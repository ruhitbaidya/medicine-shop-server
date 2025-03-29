import { TSubscribe } from "./subscribe.interface";
import { subscribeModel } from "./subscribe.model";



const createSubscribeServices = async(data:TSubscribe)=>{
    const result = await subscribeModel.create(data);
    return result
};

const getAllSubscribeServices = async()=>{
    const result = await subscribeModel.find();
    return result
}

const getSingalSubscribeServices = async(id : string)=>{
    const result = await subscribeModel.findOne({_id : id});
    return result
}

const deleteSubscribeServices = async(id : string)=>{
    const result = await subscribeModel.deleteOne({_id : id});
    return result
}

export const subscribeServices = {
    createSubscribeServices,
    getAllSubscribeServices,
    getSingalSubscribeServices,
    deleteSubscribeServices
}