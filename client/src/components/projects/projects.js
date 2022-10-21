import { Grid } from "@material-ui/core"
import React from "react"
import Project from "./project"
import "./project.css"


const projectData=[{
  "id":"1",
  "name":"social media app",
  "image":"https://cdn.pixabay.com/photo/2014/02/02/17/40/photos-256887__480.jpg",
  "about":"This is a MERN app where you can create you own memories! ."
},
{ "id":"2",
"name":"mobile Quiz app",
  "image":"https://cdn.pixabay.com/photo/2017/01/24/01/13/quiz-2004350__340.png",
  "about":"A React Native application where you can check your knowledge by giving daily quiz ! ."
},
{"id":"3",
"name":"youtube clone",
  "image":"https://cdn.pixabay.com/photo/2018/06/16/15/24/youtube-icon-3478912__340.jpg",
  "about":"This is react-redux fully functional youtube clone with authentication via google!"
 },
 {   "id":"4",
 "name":"cryptocurrency news app",
    "image":"https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg",
    "about":"Here you can check daily crypto stats and invest at the right time!"
    },
    {  "id":"5",
    "name":"contact app",
      "image":"https://cdn.pixabay.com/photo/2016/12/15/12/26/contact-us-1908763__340.png",
      "about":"It feels real mobile contact directory using react-redux.."
      },
    
]
const Projects=()=>{
 
    return(
      <>
      <h2 className="project-head">Some of my work</h2>
      { projectData.map(data=>(
        <div className="project-main">

        <div className="about-project">
         <h2 style={{color:"#4e54c8 "}}>{data.name}</h2><br/>
         <p>{data.about}</p><br/>
         <h3 style={{color:"#4e54c8"}}> >>>source code</h3>
        </div>
        <div className="project-img">
           <img src={data.image}/>
        </div>
       
      </div>
      ))
       
  
      }
      </>
    )
}

export default Projects