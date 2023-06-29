import React from 'react';
import "../Styles/Home.css"
import Plane from "../assets/planebanner.png"
import 'animate.css';

const Home = () => {

    return (
        <>
            <div className="home">
                <div className='logo-mission'>
                    <p className='animate__animated animate__slideInUp title' >
                        Travelogue
                    </p>
                    <p  className="animate__animated animate__slideInUp mission" >
                        Track your globetrotting adventures and conquer the
                    <br />
                        world, one destination at a time.
                    </p>
                </div>
                <img 
                    src={Plane} 
                    className="move-image" 
                    alt="Plane Banner"
                />
            </div>
        </>
    );
};

export default Home;
