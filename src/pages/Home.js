import React from 'react';
import "../styles/Home.css"
import Plane from "../assets/planebanner.png"
import Globe from "../assets/logo-globe.png"
import Phone from "../assets/logo-phone.png"
import Logo from "../assets/Travelogo.png"
import 'animate.css';

const Home = () => {

    return (
        <>
            <div className="home">
                <div className='header__home'>
                    <p className='
                        animate__animated 
                        animate__slideInUp 
                        title__home' >
                        Travelogue
                    </p>
                    <p  className="
                        animate__animated 
                        animate__slideInUp 
                        mission__home" >
                        Track your globetrotting adventures and conquer the
                        world, one destination at a time.
                    </p>
                </div>
                <img 
                    src={Plane} 
                    className="move-image__home" 
                    alt="Globe Banner"
                />
            </div>
        </>
    );
};

export default Home;
