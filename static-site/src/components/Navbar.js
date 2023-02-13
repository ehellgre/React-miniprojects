import React from "react";
import reactLogo from "../images/logo192.png"

function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Proj 1</h4>
        </nav>
    )
}

export default Navbar