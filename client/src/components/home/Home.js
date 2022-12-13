import React from "react";
import "./Home.css";
// import Dp from "./images/my-professional.JPG"
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import styled from "styled-components";
import { map } from "jquery";
// import { Container } from "@mui/material";

const Dp = require("../images/tyagi-ji.jpg");
const likes = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "coding",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/590029/pexels-photo-590029.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "traveling",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "reading",
  },
  {
    id: "4",
    url: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=600https://cdn3.iconfinder.com/data/icons/design-and-development-illustration/512/02-128.png",
    name: "politics",
  },
  {
    id: "5",
    url: "https://media.istockphoto.com/photos/shot-of-a-group-of-friends-hanging-out-before-working-out-together-picture-id1366052585?b=1&k=20&m=1366052585&s=612x612&w=0&h=TWpxu5xMs_eFgBTcqGwXVNXw0jtcgfSh3Z8Z4t18P1I=",
    name: "fitness",
  },
];

export default function Home() {
  console.log(InstagramIcon);
  return (
    <>
      <div id="home" style={{top:0}}>
        <div className="intro">
          <p>Hello i'm</p>
          <h1>UJJAWAL TYAGI</h1>
          <p>
            Full Stack Web Developer, A passionate programmer having little bits
            knowledge of almost every tech field.
          </p>
        </div>
        <div className="image">
          <img src={Dp} />
        </div>
      </div>
    </>
  );
}
