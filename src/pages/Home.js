import React from 'react';
import "../styles/Home.css"
import Plane from "../assets/planebanner.png"
import Globe from "../assets/logo-globe.png"
import Phone from "../assets/logo-phone.png"
import Book from "../assets/logo-book.png"
import Logo from "../assets/Travelogo.png"
import 'animate.css';

const Home = () => {

    return (
        <>
            <div className="home">
                <div className='mission-statement'>
                    <p className='animate__animated animate__slideInUp home-title' >
                        Travelogue
                    </p>
                    <p  className="animate__animated animate__slideInUp logo-mission" >
                        Track your globetrotting adventures and conquer the
                        world, one destination at a time.
                    </p>
                </div>
                <img 
                    src={Globe} 
                    className="move-image" 
                    alt="Globe Banner"
                />
            </div>
        </>
    );
};

export default Home;
