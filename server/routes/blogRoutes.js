import express from "express";
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogcontroller.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js"
import Comment from "../models/Comment.js";

const blogRouter =express.Router();



//Need to add middileware to parse the image
blogRouter.post("/add",upload.single('image'),auth ,addBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete', auth,deleteBlogById);
blogRouter.post('/toggle-publish', auth,togglePublish);



//Need to protect the router ie. only for authenticated user.


blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getBlogComments);


export default blogRouter;