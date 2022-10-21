import React, { useState } from "react";
import {Grid} from '@material-ui/core';
import Contact from "./contact.css";
import * as api from "../../api";

const Contacts=()=>{
 const [state,setState]=useState({name:"",email:"",message:""});

      const sendMe=async()=>{

     let res=await api.sendData(state)
      console.log(res);
      }
     
   return(
    <>
    <div className="upperBody">
     <div className="contact-main">
   <h1>contact.</h1>
   <p className="contact-para">
   Do you speak Na’vi? It's ok if you don't, I speak English too.
   </p>
     </div>

   <div className="social-list">
        <ul >
      <li>
      <a href="https://twitter.com/Ujjawal27808061">
        <img className="img-sc" src="https://cdn.iconscout.com/icon/free/png-64/twitter-2038532-1718517.png"/></a>
        <h3 style={{color:"blue"}} className="h3-sc">Twitter</h3>
      </li>

      <li>
      <a href="https://www.facebook.com/ujjwaltyagi.ujjwaltyagi.50/">
      <img className="img-sc" src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"/></a>
        <h3 className="h3-sc" style={{color:"blue"}} >Facebook</h3>
      </li>
     </ul>

     <ul >
      <li>
      <a href="https://www.instagram.com/ujjwal_tyagi_17/">
        <img className="img-sc" src="https://cdn.iconscout.com/icon/free/png-64/instagram-50-151089.png"/></a>
        <h3 className="h3-sc" style={{color:"pink"}} >Instagram</h3>
      </li>
      <li>
      <a href="https://github.com/UjjawalTyagi123">
      <img className="img-sc" src="https://cdn.iconscout.com/icon/free/png-64/github-163-761603.png"/></a>
        <h3 className="h3-sc" style={{color:"black"}} >Github</h3>
      </li>
     </ul>
    </div>
    </div>

    <div className="email-body">
    <div className="email-content">
    <p className="email-para"
      >Send me an email!</p>
     <form>
     <div className="nm-eml">
     <label>Name</label><br/>
     <input onChange={e=>setState({...state,name:e.target.value})} type="text" ></input><br/>
     </div>
    
    <div className="nm-eml">
    <label>Email</label><br/>
     <input onChange={e=>setState({...state,email:e.target.value})} type="text" ></input><br/>
    </div>
    
     <div className="msg">
     <label>Message</label><br/>
     <input className="msg-body"
     onChange={e=>setState({...state,message:e.target.value})} type="text" ></input><br/>
     </div>
    <button className="send-btn" onClick={sendMe}>Send</button>
     </form>
     </div>
    </div>
    </>
   
   )
}

export default Contacts