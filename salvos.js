'-----------------','-----------------','-----------------','-----------------'
"Bases.js"
import React from 'react'

export default function Bases (props) {

    return (
        <>
        <h1>{props.name}</h1>
        <img style={{height:"200px",width:"200px"}} src={props.img} />
        <h1 style={{color:"grey",fontSize:"15px",height:"150px",width:"500px"}}>{props.desc}</h1>
        
        </>
    )

}




"app.js"

import React from "react";
import Bases from './Bases'
import Dog1 from './dog1.jpg'
import Dog2 from './dog2.jpg'
import Dog3 from './dog3.jpg'

class App extends React.Component {
  state={
    Name:"Daniel",
    Img:Dog1,
    Description:"salut Daniel"
  }
  render(){
  return (
    <div className="App"> 
   <center>
     
      <button onClick={()=>{this.setState({Name : "Sarra",Img : Dog2, Description: "Salut Sarra"})}}>Sarra</button>
      <button onClick={()=>{this.setState({Name : "Harold",Img : Dog3, Description: "Salut Harold"})}}>Harold</button>
      <button onClick={()=>{this.setState({Name : "Daniel",Img : Dog1, Description: "Salut Daniel"})}}>Daniel</button>
    <Bases name={this.state.Name} img={this.state.Img} desc={this.state.Description}/>
  
     </center>
  </div>

  
  );
  }
}

export default App;
'-----------------','-----------------','-----------------','-----------------'
  