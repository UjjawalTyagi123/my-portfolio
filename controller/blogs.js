import PostBlogs from "../model/Postblog";
import mongoose from "mongoose";

export const CreateBlog=async (req,res)=>{
    const blog=await req.body;
    console.log(blog);

}