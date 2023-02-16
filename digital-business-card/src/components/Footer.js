import React from "react";
import { FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="icon-wrapper">
                <a href="#" className="icons-link">
                    <FaTwitter size={30} style={{color: "#434755"}}/>
                </a>
                <a href="#" className="icons-link">
                    <FaGithub size={30} style={{color: "#434755"}}/>
                </a>
                <a href="#" className="icons-link">
                    <FaInstagram size={30} style={{color: "#434755"}}/>
                </a>
                <a href="#" className="icons-link">
                    <FaFacebook size={30} style={{color: "#434755"}}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer