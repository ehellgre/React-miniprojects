import React from "react";
import photo from "../images/THIS_edited.jpg"
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Info() {
    
    return (
        <div className="personal">
            <img src={photo} className="personal-image"/>
            <h1 className="personal-name">Emil Hellgren</h1>
            <p className="personal-title">Software Developer</p>
            <div className="btn-wrapper">
                <a href="https://www.linkedin.com/in/emilhellgren/" className="personal-btn">
                    <FaLinkedin size={24} style={{color: "#FFFFFF"}}/>
                </a>
                <a href="mailto:emil.hellgrenn@gmail.com" className="personal-btn personal-btn2" SocialIcon url="">
                    <FaEnvelope size={24} style={{color: "#000000"}} />
                </a>
            </div>
        </div>
    )
}

export default Info