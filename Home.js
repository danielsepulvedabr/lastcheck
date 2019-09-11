import React from "react";
import './App.css';


export default function Home (props) { 

  
  return(
  <div className="homes">
    <h1>News</h1>
        <h1>{props.name}</h1>
        <img style={{height:"300px",width:"400px"}} src={props.img} />
        <h1 style={{color:"grey",fontSize:"15px",height:"150px",width:"500px"}}>{props.desc}</h1>
     

  </div>
 
    );
   }

   
  