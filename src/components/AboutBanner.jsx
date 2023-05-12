import React from 'react';
import Image from "../assets/img/aboutBannerPerso.webp";
import "./styles/aboutBanner.css";

function AboutBanner() {
    return (
        <div className="aboutBanner">
            <img src={Image} alt="A propos" />
            <p className="pAboutBanner">Parlons un peu de moi...</p>
        </div>
    )
}

export default AboutBanner