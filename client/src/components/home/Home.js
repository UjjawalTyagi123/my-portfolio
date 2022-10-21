
import React from "react"
import "./Home.css"
// import Dp from "./images/my-professional.JPG"
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import styled from "styled-components";
import { map } from "jquery";
// import { Container } from "@mui/material";

const Dp=require("../images/coding.gif")
const likes=[{
  id:'1',url:"https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600",
name:"coding"
},
{id:'2',url:"https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&w=600",
name:"traveling"
},
{id:'3',url:"https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=600",
name:"reading"
},
{id:'4',url:"https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600https://cdn3.iconfinder.com/data/icons/design-and-development-illustration/512/02-128.png",
name:"politics"
},
{
  id:'5', url:"https://media.istockphoto.com/photos/shot-of-a-group-of-friends-hanging-out-before-working-out-together-picture-id1366052585?b=1&k=20&m=1366052585&s=612x612&w=0&h=TWpxu5xMs_eFgBTcqGwXVNXw0jtcgfSh3Z8Z4t18P1I="
,
name:"fitness"}]

export default function Home(){
  console.log(InstagramIcon);
   return(
    <>
    <div>
     <div className="intro">
      <p>Hello i'm</p>
      <h1>UJJAWAL TYAGI</h1>
      <p>Full Stack Web Developer,
      A passionate programmer having little bits  knowledge of almost every tech field</p>
     </div>
     
     <div className="image">
      <img src="https://cdn3.iconfinder.com/data/icons/design-and-development-illustration/512/02-128.png"/>
     </div>
     </div>

      <div className="liked">

      <h2 className="likesHeading">Things I love most</h2>
     <Grid  container alignItems="stretch" spacing={1} style={{marginLeft:'2rem'}}>
        {likes?.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={3}>
          <p style={{fontSize:"3vh", marginLeft:"8vh"}}>{user.name}</p>
          <img className="likesimg" src={user.url} alt="..."/>
          </Grid>
        ))}
</Grid>
</div>
  
  <footer>
    <ul>
      <li><a href="https://www.instagram.com/ujjwal_tyagi_17/" 
      ><img src="https://img.icons8.com/3d-fluency/2x/instagram-new.png"/></a></li>

      <li><a href="https://www.facebook.com/ujjwaltyagi.ujjwaltyagi.50/">
      <img src="https://img.icons8.com/fluency/2x/facebook-new.png"/>
      </a>
      </li>

      <li><a href="https://github.com/UjjawalTyagi123">
      <img src="https://img.icons8.com/3d-fluency/2x/github.png"/></a>
      </li>

      <li><a href="https://twitter.com/Ujjawal27808061">
<img src="https://img.icons8.com/color/2x/twitter--v3.png"/></a>
</li>

      <li><a href="https://www.linkedin.com/in/ujjawal-tyagi-0a8319223/">
      <img src="https://img.icons8.com/office/2x/linkedin-circled--v2.png"/>
     </a></li>
    </ul>
    <p>made by @ujjawal tyagi</p>
  </footer>
  </>
)}


  


