import React from 'react';
// import logoHtml from '../assets/logos/logoHtml.png';
import "./styles/footer.css";
import DataLogo from "../data/logos.json";
// import Logos from "./FooterLogos";

function Footer() {

    return (
    <footer id="footer">
        {DataLogo.map((img,index)=> 
                    <img key={index} src={img.picture} alt={img.alt} className="logoFooter"/>                   
                )}

            
        {/* <img id="logofooter" src={logoHtml} alt="Logo Kasa" />
        <p className="pFooter">&copy; 2020 Kasa. All Rights Reserved</p> */}
    </footer>
    )
}
export default Footer