import React from 'react';
import '../styles/AboutUs.css';
import Cherry from "../assets/cherry.jpg"
import Suri from "../assets/suri.jpg"
import Ramel from "../assets/ramel.png"
import Scott from "../assets/scott.jpeg"
import linkedin from "../assets/linkedinlogo.png"
import github from "../assets/github.png"
import slack from "../assets/slack.png"

const AboutUs = () => {
    
    return (
        <>
            <div about-us-className="about-section">
                <h1>Meet The Team</h1>
                <p>As developers we collaboratively design, build and maintain software applications and systems </p>
                <p>to address complex technological challenges and deliver innovative solutions.</p>
            </div>

            <h2 about-us-style={{ textAlign: 'center' }}>Our Team</h2>
            <div className="row">
                <div className="column">
                <div className="card">
                    <img src={Cherry} alt="Sarah" width="329" height="375" />
                    <div className="container">
                    <h2>Sarah Cherry</h2>
                    <p className="about-us-title">Tech Lead/Anchor</p>
                    <p> Assumes responsibility for the code base and version control, ensuring its integrity and efficient management throughout the project. </p>
                    <center>
                    <a href="https://www.linkedin.com/in/sarah-m-cherry/" target="blank" class="test"><span><img src={linkedin} width="35" height="35" border="0" /></span> </a>
                    <a href="https://github.com/cherrythefool" target="blank" class="test"><span><img src={github} width="40" height="40" border="0" /></span> </a>
                    <a href="https://sdlearn.slack.com/team/U052MQFBZ9B" target="blank" class="test"><span><img src={slack} width="35" height="35" border="0" /></span> </a>
                    </center>
                    </div>
                </div>
                </div>

                <div className="column">
                <div className="card">
                <img src={Suri} alt="Suri" width="329" height="375" />
                    <div className="container">
                    <h2>Surielis Rodriguez</h2>
                    <p className="about-us-title">Lead Design</p>
                    <p> Has ownership of the project's aesthetics, color scheme, and branding, ensuring a cohesive and visually appealing experience for users. </p>
                    <center>
                    <a href="https://www.linkedin.com/in/surielis-rodriguez/" target="blank" class="test"><span><img src={linkedin} width="35" height="35" border="0" /></span> </a>
                    <a href="https://github.com/SurielisRodriguez" target="blank" class="test"><span><img src={github} width="40" height="40" border="0" /></span> </a>
                    <a href="https://sdlearn.slack.com/team/U0534HN74LE" target="blank" class="test"><span><img src={slack} width="35" height="35" border="0" /></span> </a>
                    </center>
                    </div>
                </div>
                </div>

                <div className="column">
                <div className="card">
                <img src={Scott} alt="Scott" width="329" height="375" />
                    <div className="container">
                    <h2>Scott Tuschl</h2>
                    <p className="about-us-title">Product Manager</p>
                    <p> Controls the overarching vision of the product, ensuring that it aligns with the requirements and specifications to deliver a successful outcome. </p>
                    <center>
                    <a href="https://www.linkedin.com/in/scott-tuschl/" target="blank" class="test"><span><img src={linkedin} width="35" height="35" border="0" /></span> </a>
                    <a href="https://github.com/scott198989" target="blank" class="test"><span><img src={github} width="40" height="40" border="0" /></span> </a>
                    <a href="https://sdlearn.slack.com/team/U052BV8L1U1" target="blank" class="test"><span><img src={slack} width="35" height="35" border="0" /></span> </a>
                    </center>
                    </div>
                </div>
                </div>

                <div className="column">
                <div className="card">
                <img src={Ramel} alt="Ramel" width="329" height="375" />
                    <div className="container">
                    <h2>Ramgel Romo</h2>
                    <p className="about-us-title">Project Manager</p>
                    <p> Responsible for internal team communication, collaboration, and project management oversight for efficient coordination. </p>
                    <center>
                    <a href="https://www.linkedin.com/in/romoramgel/" target="blank" class="test"><span><img src={linkedin} width="35" height="35" border="0" /></span> </a>
                    <a href="https://github.com/Romoramel" target="blank" class="test"><span><img src={github} width="40" height="40" border="0" /></span> </a>
                    <a href="https://sdlearn.slack.com/team/U053Q2474KT" target="blank" class="test"><span><img src={slack} width="35" height="35" border="0" /></span> </a>
                    </center>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};


export default AboutUs;
