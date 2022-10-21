import React from "react";
import "./blog.css"
const Blog=(props)=>{
return(
    <>
         <div id={props.Data.id} className="blog-div">
              <h4>{props.Data.heading}</h4> 
              <p>{props.Data.content}</p>  
              <h5>written by {props.Data.bottom}</h5> 
        </div>
    </>
)
}

export default Blog