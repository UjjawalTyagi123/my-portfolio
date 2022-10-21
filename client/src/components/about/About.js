import React from "react";
import "./About.css"
import Skill from "./skill/skill"; 
import {Grid} from '@material-ui/core';

const About=()=>{
   const Data=[{
        "skill":"https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png",
        "stat":"50%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/css3-9-1175237.png",
        "stat":"50%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png",
        "stat":"70%"
    },
   
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png",
        "stat":"80%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/redux-283024.png",
        "stat":"70%"
    },
    
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/node-js-3628954-3030179.png",
        "stat":"40%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/express-9-1175170.png",
        "stat":"40%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/mongodb-5-1175140.png",
        "stat":"30%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/firebase-3628772-3030134.png",
        "stat":"80%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/c-4-226082.png",
        "stat":"80%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/c-57-1175191.png",
        "stat":"50%"
    },
    {
        "skill":"https://cdn.iconscout.com/icon/free/png-64/python-2038870-1720083.png",
        "stat":"40%"
    },
    ]
   return(
    <>
   <div className="about-main">
    <h1>about.</h1>
    <p className="heading">
        Hey there!<br/>
        i'm glad to see you here.<br/>
   
</p>
<p className="main-content">
 well, i'm a undergraduate student of computer science
 i'm passionate about coding and building new things is my hobby
 i believe in learn by doing and i made it my way of learning.
 web development is my main div but i enjoy some data science concepts
 and competitive programming too.
</p>

   </div>
   <div className="skills">
  <h1>skills.</h1>
  {/* <ul className="list1">
    <li>
     <img src="https://cdn.iconscout.com/icon/free/png-64/html-59-225995.png"/></li>
     <li>
    <img src="https://cdn.iconscout.com/icon/free/png-64/css3-9-1175237.png"/>
    </li>
    <li><img src="https://cdn.iconscout.com/icon/free/png-64/javascript-1-225993.png"/></li>
     <li>  <img src="https://cdn.iconscout.com/icon/free/png-64/react-3521666-2945110.png"/>
    </li>
   

  </ul> */}
  <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>     
           {Data.map((data)=>(
                   <Grid item xs={4}>
        <Skill data={data} />

        </Grid>
   
          
      ))}
      </Grid>

   </div>
   </>
   )
}

export default About