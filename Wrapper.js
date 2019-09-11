import React from 'react'
import Photo from './Photo'
import image from './download.jpg'
import Title from './Title'
export default function Wrapper (props) {

    return (
        <>
        <Photo src={image}/>
        <Title style={{color:"red"}} title="My Name here"></Title>
        <Title style={{fontSize:"15px",color:"blue"}} title="My job here"  ></Title>

        </>
    )

}