import axios from "axios"

const API=axios.create({baseURL:"http://localhost:3000"});

export const sendData=(data)=>API.post('/server',data)

export const sendBlog=(data)=>API.post('/blogs/',data)

export const getBlogs=()=>API.get('/blogs/')



