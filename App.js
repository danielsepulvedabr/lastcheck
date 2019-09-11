import React from "react";
import Bar from './Bar';
import About from './About';
import List from './List';
import Home from './Home';
import './App.css';
import Anime1 from './anime1.jpg'
import Anime2 from './anime2.PNG'
import Anime3 from './anime3.jpg'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home2 from './Home2'


class App extends React.Component { 
  state={
    Name:"",
    Img:Anime1,
    Description:""
  }
  render(){
  return(
    <Router>
  <div className="App">
    <Bar />
    <Route path="/Home"  component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/List" component={List} />
     
    <Route path="/" exact component={Home2}/>

  </div>
  </Router>
    
  );
  }
}
  
export default App;
    
  

