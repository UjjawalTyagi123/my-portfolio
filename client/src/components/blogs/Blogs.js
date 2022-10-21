import React, { useState,useEffect } from "react";
import  "./Blogs.css"
import { Grid } from "@material-ui/core"
import Blog from "./blog/blog";
import {useSelector,useDispatch } from "react-redux";
import {fetchBLogs,sendBlog_data} from "../../redux/action/action";


const Blogs=()=>{
 const[name,setName]=useState()
 const[content,setContent]=useState()
 const[bottom,setBottom]=useState()
 const dispatch=useDispatch()

    const HandleSubmit=async (e)=>{
       
       dispatch(sendBlog_data({name,content,bottom}))
       alert(' i will accept your blog if it found really good else i will delete it!')

      //  console.log(await getBlogs());
    // sendBlog({name,content,bottom});
     setName('')
     setContent('')
     setBottom('')
    }
    
    useEffect(() => {
      dispatch(fetchBLogs());
   
    }, [dispatch])
    

    let _data=useSelector((state)=>state.blogs)
    let blogs_data=_data.blogs
  console.log(blogs_data.data);

  var count = 0;
  for (var p in blogs_data.data) {
    blogs_data.data.hasOwnProperty(p) && count++;
  }

    return(
        <>
       <div className="blog-head">
         <h2 style={{color:"#4e54c8"}}>write a blog..</h2>
       </div>
       <form   onSubmit={HandleSubmit}>

       <div className="text-area">

       <textarea className="content-heading"
      value={name}
       onChange={e=>setName(e.target.value)}
        placeholder="Heading" 
        
        
        >
       
       </textarea>
       <textarea  className="content-main" 
   value={content}
       placeholder="main body"
       
     onChange={e=>setContent(e.target.value)}>
       
       </textarea>
       <textarea className="content-bottom" 
      value={bottom}
       placeholder="written by" 
       onChange={e=>setBottom(e.target.value)}
       >

</textarea>
       </div><br/>
       <button className="blog-btn" >submit blog</button>
       </form>
       <div className="render-blog">
       <h1 className="blog-render-h1">Latest Blogs...</h1>
       <div className="render-blog-main">
      {!count ? <p>No blog at the moment😭let's create your own🥳... "</p>:
       
       <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>     
           {Array.isArray(blogs_data.data)?blogs_data.data.map((Data)=>(
                   <Grid item xs={8} key={Data.id}>
        <Blog Data={Data} />

        </Grid>
   
          
      )):[]}
      </Grid>
      }
      </div>
      </div>
       </>
    )
}

export default  Blogs