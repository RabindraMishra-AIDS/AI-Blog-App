import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';



export const adminLogin=async ( req , res)=>{
    //We will provide one Authentication Token to user
    try{
        const {email,password}=req.body;
        if(email != process.env.ADMIN_EMAIL || password!=process.env.ADMIN_PASSWORD){
            return res.json({sucess:false,message:"Invalid Credentials"})
        }
        const token =jwt.sign({email},process.env.JWT_SECRET)

         
        res.json({sucess:true,token})

    }
    catch(error){
        res.json({sucess:false,message:error.message});
    }
};


//Getting blogs for Admin

export const getAllBlogsAdmin =async(req,res)=>{
    try{
const blogs =await Blog.find({}).sort({createdAt:-1}); //Will return all the blogs
res.json({sucess:true,blogs})
    }
    catch(error){
        res.json({sucess:false,message:error.message});
    }
};


//For seeing All Comments

export const getAllComments = async(req,res)=>{
    try{
const comments= await Comment.find({}).populate("blog").sort({createdAt:-1});
res.json({sucess:true,comments});
    }
    catch(error){

    }
}

//Admin can get Dashboard Data
export const getDashboard = async(req,res)=>{
    try{
const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5); //We require only 5 Blog Post
const blogs=await Blog.countDocuments();
const comments= await Comment.countDocuments();
const drafts = await Blog.countDocuments({isPublished:false});

const dashboardData={
    blogs,comments,drafts,recentBlogs
}
res.json({sucess:true,dashboardData});
    }
    catch(error){
res.json({sucess:false,message:error.message});
    }
};


//Admin Deleting or Approving the Comment

export const deleteCommentById = async(req,res)=>{
    try{
const {id} =req.body;
await Comment.findByIdAndDelete(id);
res.json({sucess:true,message:"Comment is Deleted Sucessfully"});
    }
    catch(error){
res.json({sucess:false,message:error.message});
    }
}

//Approve Comment
export const approveCommentById = async(req,res)=>{
    try{
const {id}=req.body;
await Comment.findByIdAndUpdate(id,{isApproved:true});
res.json({sucess:true,message:"Comment approved sucessfully"});
    }
    catch(error){
res.json({sucess:false,message:error.message});
    }
}