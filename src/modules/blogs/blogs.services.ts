import { TBlog } from "./blogs.interface";
import { blogModel } from "./blogs.model";


const blogCreateServices = async(data : TBlog)=>{
    const result = await blogModel.create(data);
    return result
}



export const blogServices = {
    blogCreateServices
}