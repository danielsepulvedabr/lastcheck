import React from "react";
import './App.css';
import Kill from './kill.jpg'
import Naruto from './naruto.jpg'
import Steins from './steins.jpg'
import Violet from './violet.jpg'
import Yuri from './yuri.jpg'
import Dragon from './dragonsuper.jpg'
import ListAnimes from './ListAnimes'


const animlist=
[
    {
        name: 'Kill la kill',
        desc:"2013-2014",
        src:Kill,
        mdbbtn:'click here'
    },
    {
        name: 'Naruto',
        desc:"2002-2007",
        src:Naruto,
        mdbbtn:'click here'
    },
    {
        name: 'Steins Gate',
        desc:"Since 2011",
        src:Steins,
        mdbbtn:'click here'
    },
    {
        name: 'Violet evergarden',
        desc:"2018",
        src:Violet,
        mdbbtn:'click here'
    },
    {
        name: 'Yuri on ice',
        desc:"2016",
        src:Yuri,
        mdbbtn:'click here'
    },
    {
        name: 'Dragon ball super',
        desc:"2015-2018",
        src:Dragon,
        mdbbtn:'click here'
    }
]

function List() { 

  
  return(
  <div  className="List">
    <h1>List</h1>
<div style={{display:'flex',flexWrap:"wrap",justifyContent:'space-around'}}>{animlist.map(e=><ListAnimes className="listphotos"  
    name={e.name} 
    desc={e.desc}
    style={{height:"200px",width:"200px"}} 
    src={e.src}
    mdbbtn={e.mdbbtn}
    />)}
 
    </div>
    


  </div>
 
    );
   }

   export default List;
  