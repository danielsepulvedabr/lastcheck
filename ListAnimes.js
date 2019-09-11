import React from "react";
import './App.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function Card (props) { 

    
  return(
    
  <div className="homes">
    
    <MDBCol style={{margin:"7%"}}>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage style={{height:"200px",width:"350px"}} className="img-fluid" src={props.src} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>
          {props.desc}
          </MDBCardText>
          <MDBBtn href="#">{props.mdbbtn}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    


  </div>
 

 );
  }

export default Card;