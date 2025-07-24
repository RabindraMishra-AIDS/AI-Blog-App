import mongoose from "mongoose";

//Defining Database Model

const commentSchema = new mongoose.Schema({
blog:{type:mongoose.Schema.Types.ObjectId,ref:'blog',required:true},
name:{type:String,required:true},
content:{type:String,required:true},
isApproved:{type:Boolean,default:false},
},{timestamps:true})

const Comment=mongoose.model('comment',commentSchema)
//Will create a Model blog having blogSchema

export default Comment;