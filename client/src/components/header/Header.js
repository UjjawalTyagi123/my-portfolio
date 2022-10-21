import React, { useState } from "react";
import "./Header.css"
import Logo from "../images/logo.png"
import { Link } from "react-router-dom";

// import MenuIcon from '@mui/icons-material/Menu';
// import ClearIcon from '@mui/icons-material/Clear';


const Header=()=>{

    const [Icon,UpdateIcon]=useState(true)

    const setIcon=()=>{
        UpdateIcon(value=>!value)
        console.log(Icon);
    }
  const MenuIcon="https://img.icons8.com/material-outlined/2x/menu.png";
  const ClearIcon="https://img.icons8.com/ios-filled/2x/multiply.png";
    return(
    
        <>
   
        <div className= {`header ${Icon?"header-sml-hide":"header-sml-show"}`} >
          <Link className="link" to="/"><img className="logo" src={Logo} alt="img" /></Link> 
       {/* <button onClick={UpdateIcon(prev=>!prev)}>button</button>  */}
       <nav className="menu-icon" onClick={setIcon}><img className="icon" src={Icon?MenuIcon:ClearIcon} alt="img" /> </nav>
          <div className={`list-content  ${Icon?"list-content-hide":"list-content-show"} `}>
          <nav className="list-item">
            <ul>
               <li><Link className="link" to="/">Home</Link></li> 
                <li><Link className="link" to="/projects">Projects</Link></li>
                <li><Link className="link" to="/blogs">Blogs</Link></li>
                <li><Link className="link" to="/contacts">Contacts</Link></li>
                <li><Link className="link" to="/about">Abou</Link>t</li>

            </ul>
           </nav>

           {/* <nav className="social-media">
          <ul>
          https://img.icons8.com/glyph-neue/2x/facebook-new.png
          <li ><img className="imgMedia" src="https://img.icons8.com/windows/2x/twitter.png" alt="img"></img></li>
                      <li ><img  className="imgMedia"  src="https://img.icons8.com/glyph-neue/2x/facebook-new.png" alt="img"></img></li>
            <li ><img  className= "imgMedia"   src="https://img.icons8.com/windows/2x/instagram-new.png" alt="img"></img></li>
            <li ><img  className="imgMedia"  src="https://img.icons8.com/windows/2x/github.png" alt="img"></img></li>
            
                   </ul>
           </nav> */}
           </div>
        </div>
 
        
        </>

    )
}

export default Header