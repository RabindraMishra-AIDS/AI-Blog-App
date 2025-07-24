import mongoose from "mongoose";
//Connecting with mongodb

const connectDB=async()=>{
try{
    mongoose.connection.on('connected',()=> console.log("Database is Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/dainikblog`);
}
catch(error){
console.log(error.message);
}
};

export default connectDB;