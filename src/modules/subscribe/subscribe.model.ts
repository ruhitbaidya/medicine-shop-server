import { model, Schema } from "mongoose";
import { TSubscribe } from "./subscribe.interface";
const subscribeSchema = new Schema<TSubscribe>({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    profession : {
        type : String,
        required : true
    }
},{timestamps : true});


export const subscribeModel = model<TSubscribe>("subscribe", subscribeSchema);