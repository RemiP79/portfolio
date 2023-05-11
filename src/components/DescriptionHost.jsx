import React from "react";
import './styles/DescriptionHost.css';

function Host({props}) {         
    return (          
       <a href ={props.link} target="_blank" rel="noreferrer">
       <div className="host">                              
            <div className="hostName">{props.name}</div> 
            <div className="divHostImg">
                <img src = {props.picture} alt = {props.name} className="hostImg"/> 
            </div>               
        </div>  
        </a>   
   )    
}
export default Host