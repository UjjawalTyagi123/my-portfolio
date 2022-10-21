import  Express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
// import * as PostBlogs from "./model/Postblog.js"

// import  createBlog  from "./controller/blogs"
const PORT=process.env.PORT||3000;
var Schema=mongoose.Schema;
 const blogSchema=new Schema({
     heading:String,
     content:String,
     bottom:String
 })
const PostBlogs =  mongoose.model('PostBlogs', blogSchema)
// import DataRoute from "./router.js"
const app=Express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));


app.use(cors());

if(process.env.NODE_ENV ==="production"){
     app.use(Express.static("client/build"));
}

mongoose.connect("mongodb+srv://ujjawal123:tyagi123@cluster0.aehuk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlparser:true,useUnifiedtopology:true})
  .then(()=>app.listen(PORT,()=>{
    console.log("server is running on port 3000");
}))
  .catch((error)=>(console.error(error)))


  app.post('/blogs/',async (req,res)=>{
    const blog=req.body;
    const newblog=new PostBlogs()
    newblog.heading=req.body.name;
    newblog.content=req.body.content;
    newblog.bottom=req.body.bottom;
    newblog.save();
    console.log(blog);
    try{
  
     res.json({message:"blog created successfully"})
    }
    catch{
      console.log("not created");
    
        res.json({message:"blog not created"})
    }
});

app.get('/blogs/',async (req,res)=>{
    const blog=await PostBlogs.find();
   res.json({data:blog})
    console.log(blog);
})

