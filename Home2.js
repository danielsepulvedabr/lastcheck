import React from "react";
import Home from './Home';
import './App.css';
import Anime1 from './anime1.jpg'
import Anime2 from './anime2.PNG'
import Anime3 from './anime3.jpg'
import Lbutton from './component/button/Lbutton'


class Home2 extends React.Component { 
  state={
    Name:"My Hero Academia Confirms Season 4",
    Img:Anime1,
    Description:""
  }
  render(){
  return(
    <div>

         <div className="Lbuttons">
      
    <Lbutton className="buttons" onClick={()=>{this.setState({Name : "My Hero Academia Confirms Season 4",Img : Anime1, Description: ""})}}>Boku no hero</Lbutton>
    <Lbutton className="buttons" onClick={()=>{this.setState({Name : "Attack on Titan season 4 release date",Img : Anime2, Description: ""})}}>Attack on titan</Lbutton>
    <Lbutton className="buttons" onClick={()=>{this.setState({Name : "Overlord Season 4 Reportedly Announced",Img : Anime3, Description: ""})}}>Overlord</Lbutton>
     
    
    

  </div>
  <Home name={this.state.Name} img={this.state.Img} desc={this.state.Description}/>
    </div>
 
  
  );
  }
}
  
export default Home2;
    
  

