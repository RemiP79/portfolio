import React from 'react';
import Logo from '../assets/img/LogoHeader.png';
import "./styles/header.css";
import { NavLink} from 'react-router-dom';


function Banner() {
    return (<header id="header">
        <img id="logoKasaRouge" src={Logo} alt="Logo RP" />
            <nav className="navbar"> {/* */} 
                <NavLink className={({isActive}) => 
                                isActive ? "nav-active nav-link" 
                                :
                                "nav-link" } end="/" to="/" >Accueil 
                </NavLink> 
                <NavLink className={({isActive}) =>
                                isActive ? "nav-active nav-link" 
                                :
                                "nav-link"} end="about" to="/about"> Mieux me connaître ?
                </NavLink> 
            </nav>
    </header>
    )
}
export default Banner