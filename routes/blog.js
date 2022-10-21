import  express  from "express";
import { createBlog } from "../controller/blogs";

const Router=express.Router();

Router.post('/',createBlog);

export default Router