import React from "react";
import  "./skill.css"
const Skill=(props)=>{
    return(
        <>
       <img className="sill-img" src={props.data.skill}/>
       <h3>{props.data.stat}</h3>
        </>
    )
}

export default Skill