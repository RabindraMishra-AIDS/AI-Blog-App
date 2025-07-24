import mongoose from "mongoose";

//Defining Database Model

const blogSchema = new mongoose.Schema({
    title:{type:String,required:true
    },
    subTitle:{type:String},
        title:{type:String,required:true
    },
        description:{type:String,required:true
    },
        category:{type:String,required:true
    },
        image:{type:String,required:true
    }, //Since we will be storing url of image
        isPublished:{type:Boolean,required:true
    },

},{timestamps:true})

const Blog=mongoose.model('blog',blogSchema)
//Will create a Model blog having blogSchema

export default Blog;