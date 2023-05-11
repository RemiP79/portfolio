import React from 'react';
import Image from "../assets/img/portraitRPerez.png";
import "./styles/homeBanner.css";
import { Link } from 'react-router-dom';

function HomeBanner() {
    return (
        <>
        <div className="banniereHome">
            <img src={Image} alt="accueil" className="imghomebanner"/> 
            <span className="infopersoH1">
                <div className="titleHomeBanner">
                    <p className="myName">PEREZ Rémi</p>
                    <h1 className="banniereH1">DEVELOPPEUR WEB</h1>
                </div>
                <div className="infoPerso"> 
                        <p className="linkToCv">
                            <Link to= "/files/CV20230427_definitif.pdf" target="_blank" download className="cv">Mon CV</Link>    
                        </p>
                        <div className="divLinkToMail">
                            <a href ="mailto:perez.remi@gmail.com">@ : perez.remi@gmail.com</a>
                            <p className="phone">✆ : +33 (0)6 20 06 20 65</p>
                        </div>
                </div>
            </span>
        </div>
        </>
        // <div className="homeBanner" >
        //     <img src={Image} alt="accueil" />            
        //     <p className = "pHomeBanner">Chez vous, partout et ailleurs</p>
            
        // </div>
    )
}

export default HomeBanner