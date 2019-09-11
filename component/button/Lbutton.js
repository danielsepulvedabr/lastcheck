import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


export default function Lbutton (props){
    return(

        <ButtonToolbar>
  <Button onClick={props.onClick} variant="primary" size="lg" active>
    {props.children}
  </Button>
  
</ButtonToolbar>
    )
    
}