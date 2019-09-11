import React from "react";
import './App.css';
import { Link } from 'react-router-dom';



function Bar() { 
 const barStyle = {
        color: 'grey'
 };
  
  return(
  <nav>
    <ul className="nav-Links">
        <Link style={barStyle} to='/'>
        <li >News</li>
        </Link>

        <Link style={barStyle} to='/About'>
        <li>About</li>
        </Link>

        <Link style={barStyle} to='/List'>
        <li>List</li>
        </Link>

    </ul>

 </nav>
 
    );
   }

   export default Bar;
  