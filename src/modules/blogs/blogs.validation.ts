import z from "zod";

export const blogValidation = z.object({
    image : z.string(),
    title : z.string(),
    description : z.string(),
    author : z.string()
})