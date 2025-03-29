import express from "express";
import { blogControler } from "./blogs.contrler";
import { validateSchema } from "../../middleware/userValidation";
import { blogValidation } from "./blogs.validation";

const router = express.Router();


router.post("/create-blog", validateSchema(blogValidation) ,blogControler.blogCreateControler);




export const blogRouter = router;