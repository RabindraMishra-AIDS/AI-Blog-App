import express from 'express'
import 'dotenv/config' //storing environment variable
import cors from 'cors'; //For frontend Backend connection
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app=express();
await connectDB()


//parser
app.use(cors());
app.use(express.json());

//Routes
app.get('/',(req,res)=>{
res.send("API is working")
})

app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter);









//Starting the server
const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server is working on:",PORT)
})

export default app;