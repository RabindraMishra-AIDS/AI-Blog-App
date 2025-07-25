import express from "express";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/admincontroller.js";
import auth from "../middleware/auth.js";
import { getAllBlogs } from "../controllers/blogcontroller.js";

const adminRouter=express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",auth ,getAllComments);
adminRouter.get("/blogs",auth ,getAllBlogsAdmin);
adminRouter.post("/delete-comment",auth ,deleteCommentById);
adminRouter.post("/approve-comment",auth , approveCommentById);
adminRouter.get("/dashboard",auth ,getDashboard);



export default adminRouter;
