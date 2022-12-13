import React from "react";
import  "./skill.css"
const Skill=(props)=>{
    return(
        <div className="skills-main">
       <img className="sill-img" src={props.data.skill}/>
       <h3>{props.data.stat}</h3>
        </div>
    )
}

export default Skill