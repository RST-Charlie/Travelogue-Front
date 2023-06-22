import React from "react"
//add background to assets folder and fix this file path
import background from "./assets/"

const Home = () => {
    return(
        <>
            <div style={{ backgroundImage: 'url(${background})', height: "100vh", width: "100vw"}}>
                <h1>Travelogue</h1>
                <h4>Track your globetrotting adventures as you trek across the world, one destination at a time</h4>
            </div>
        </>
    )
}
export default Home

//One of the following should work for fonts
// For App.css - 
// @font-face{
//     font-family: 'Pathway Gothic One';
//     src: url(http://fonts.google.com/specimen/Pathway+Gothic+One);
//     font-weight: bold;
//     font-style: normal;
// }

// @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One:wght@300,400,500,600,700,800,900&display=swap');