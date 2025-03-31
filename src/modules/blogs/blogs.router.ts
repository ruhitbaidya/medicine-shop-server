import express from "express";
import { blogControler } from "./blogs.contrler";
import { validateSchema } from "../../middleware/userValidation";
import { blogValidation } from "./blogs.validation";
import { adminverifyUser } from "../auth/adminTokenVerify";

const router = express.Router();

router.post(
  "/create-blog",
  adminverifyUser,
  validateSchema(blogValidation),
  blogControler.blogCreateControler
);

router.get("/get-all-blogs", blogControler.getAllBlogsControler);
router.get("/get-singal-blogs/:id", blogControler.getAllBlogsControler);

router.delete(
  "/delete-blog/:id",
  adminverifyUser,
  blogControler.deleteBlogsControler
);

router.patch(
  "/update-blog/:id",
  adminverifyUser,
  blogControler.updateBlogsControler
);
export const blogRouter = router;
