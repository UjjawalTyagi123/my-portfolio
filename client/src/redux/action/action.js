import React from "react";
import * as api from "../../api"
import { FETCH_ALL,SEND } from "../../components/Consonants.js";
import { useDispatch } from "react-redux";
import { Create } from "@material-ui/icons";

export const fetchBLogs=()=>async(dispatch)=>{
     
     const blogs=await api.getBlogs();
   
     dispatch({type:FETCH_ALL,payload:blogs.data})
}

export const sendBlog_data=(data)=>async(dispatch)=>{
const blog=await api.sendBlog(data);
dispatch({type:SEND,payload:blog});
}
