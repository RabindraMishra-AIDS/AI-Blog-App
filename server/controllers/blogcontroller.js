import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";


export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;
        //Need to pass image file by parsing it using multer thus need to define a Middleware For it.
        if (!title || !description || !category || !imageFile) {
            return res.json({ sucess: false, message: "Missing required field" })
        }
        //Store our data (imagekit allows to store image on cloud also optimizes image (size,format))
        const fileBuffer = fs.readFileSync(imageFile.path);


        //Upload IMage to Imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs" //will arrange all images inside blogs folder in imagekit
        })


        //optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' }, //Auto compression
                { format: 'webp' }, //Convert to Modern Format
                { width: '1280' }   //Width Resizing

            ]
        });


        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image, isPublished });

        res.json({ sucess: true, message: "Blog Added Sucessfully" });

    }
    catch (error) {


        res.json({ sucess: false, message: "Blog Not Added" });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ sucess: true, blogs })
    }
    catch (error) {
        res.json({ sucess: false, message: error.message });
    }
}

//Getting Individual Blog Data
export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.json({ sucess: false, message: "Blog not Found" });
        }
        res.json({ sucess: true, blog })
    }
    catch (error) {
        res.json({ sucess: false, message: error.message });
    }
}

//Deleting a Blog by ID
export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);


//Delete all comments associated with this Blog
await Comment.deleteMany({blog:id});

        res.json({ sucess: true, message: 'Blog Deleted Sucessfully' })
    }
    catch (error) {
        res.json({ sucess: false, message: error.message });
    }
}


//Function for publishing/unPublishing

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        //Saving the changes in Database

        await blog.save();
        res.json({ sucess: true, message: 'Blog Status Updated' })
    }
    catch (error) {
        res.json({ sucess: false, message: error.message });
    }
};

//Creating Comment API

export const addComment = async(req, res)=>{
try {
    const {blog,name,content}=req.body;
    await Comment.create({blog,name,content}) //Create New Data

    res.json({sucess:true,message:'Comment Added for Review'});
}
catch(error){
    res.json({sucess:false,message:error.message});
}
}

//Comment Data For individual Blog
export const getBlogComments=async(req,res)=>{
    try{
        const {blogId}=req.body;
        const comments=await Comment.find({blog:blogId , isApproved:true}).sort({createdAt:-1});
        res.json({sucess:true,comments});
    }
    catch(error){
        res.json({sucess:false,message:error.message})
    }
}