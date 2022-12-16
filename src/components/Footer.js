import React from "react";
import Github from "../imgs/github.svg";
import Linked from "../imgs/linkedin.svg";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
            <div className="linkContainer">
                <a href="https://github.com/connorwarme">
                <img src={Github} alt="GitHub Profile"></img>
                </a>
                <a href="https://www.linkedin.com/in/connor-warme-103a09167">
                <img src={Linked} alt="LinkedIn Profile" target="_blank"></img>
                </a>
            </div>
            <div className="textContainer">
                <div className="footerText">Peregrinning Productions</div>
            </div>
            </div>
      </div>
    )
}

export default Footer;