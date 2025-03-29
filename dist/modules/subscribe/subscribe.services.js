"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeServices = void 0;
const subscribe_model_1 = require("./subscribe.model");
const createSubscribeServices = async (data) => {
    const result = await subscribe_model_1.subscribeModel.create(data);
    return result;
};
const getAllSubscribeServices = async () => {
    const result = await subscribe_model_1.subscribeModel.find();
    return result;
};
const getSingalSubscribeServices = async (id) => {
    const result = await subscribe_model_1.subscribeModel.findOne({ _id: id });
    return result;
};
const deleteSubscribeServices = async (id) => {
    const result = await subscribe_model_1.subscribeModel.deleteOne({ _id: id });
    return result;
};
exports.subscribeServices = {
    createSubscribeServices,
    getAllSubscribeServices,
    getSingalSubscribeServices,
    deleteSubscribeServices
};
