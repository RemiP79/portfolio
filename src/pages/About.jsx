import React from 'react';
import imgGuitare from '../assets/img/aProposguitare.webp';
import imgPiano from '../assets/img/aProposclavier.webp';
import imgBatterie from '../assets/img/aProposbatterie.webp';
import imgBMX from '../assets/img/aProposbmx.webp';
import imgChant from '../assets/img/aProposchant.webp';
import imgCote from '../assets/img/aProposcote.webp';
import imgEscalade from '../assets/img/aProposescalade.webp';
import imgEurodi from '../assets/img/aProposeurodisne.webp';
import imgHamac from '../assets/img/aProposhamac.webp';
import imgMaillorca from '../assets/img/aProposmaillorc.webp';
import imgStatues from '../assets/img/aProposstatuesOr.webp';
import imgTennis from '../assets/img/aPropostennis.webp';
import imgThai from '../assets/img/aProposthailande.webp';
import imgThai2 from '../assets/img/aProposthailande2.webp';
import HomeBanner from '../components/AboutBanner.jsx';
import "../components/styles/about.css";

function About () {
  return (
    <div>     
      <HomeBanner/>
      <div className="PAbout1">
        <p className="PAbout">Né en juin 1979, j'ai toujours été un enfant dynamique et vif d'esprit, toujours partant pour
          effectuer tous types d'activités nouvelles.
        </p>
      </div>

      <p className="pTitres">La musique...</p>
      <div className="PAbout2">        
        <p className="PAbout">Cela a commencé dès l'age de 7 ans où j'ai décidé, à la grande surprise de mes parents de faire de la musique. Le piano a été mon premier instrument. Puis, au fil du temps, je me suis 
          diversifié en essayant tous les intruments qui me passaient sous la main : guitare, batterie, percussion, et même le chant!!
        </p>
        <div className="divPhoto">
          <img src={imgGuitare} alt="guitare" className="imgVert"/>
          <img src={imgChant}  alt="chant" className="imgVert imgResp"/>
          <img src={imgBatterie}  alt="batterie" className="imgVert imgResp"/>
          <img src={imgPiano}  alt="piano" className="imgVert imgResp"/>
        </div>
      </div>

      <p className="pTitres">Le sport...</p>
      <div className="PAbout3">
        <p className="PAbout">En parallèle à cela, j'ai fait beaucoup de sport : la gymnastique artistique en premier, mon activité principale, que j'ai effectué pendant plus de 20 ans en tant que compétiteur.
          Puis, le BMX, le tennis et l'escalade.
        </p>
      
        <div className="divPhoto">
          <img src={imgBMX} alt="bmx" className="imgVert imgResp"/>
          <img src={imgStatues}  alt="statues" className="imgVert"/> 
          <img src={imgEscalade}  alt="escalade" className="imgVert"/>
          <img src={imgTennis}  alt="tennis" className="imgVert imgResp"/>
        </div>
      </div>

      <p className="pTitres">Mes plaisirs...</p>
      <div className="PAbout4">
        <p className="PAbout">J'aime voyager. Je me suis aussi, tout au long de ma vie, engagé au sein d'associations, entraineur, puis au sou des écoles de ma commune, mais aussi en tant que conseiller municipal de ma commune, délégué à la jeunesse
        </p>
        <div className="divPhoto">
          <img src={imgCote} alt="cote" className="imgVert imgResp"/>        
          <img src={imgThai}  alt="thailande" className="imgVert imgResp"/> 
          <img src={imgMaillorca}  alt="maillorca" className="imgVert imgResp"/>       
          <img src={imgThai2}  alt="thailande2" className="imgVert"/>            
        </div>
      </div>

      <p className="pTitres">Simplement moi...</p>
      <div className="PAbout5">
        <p className="PAbout">Mon entourage me définit comme engagé, sans à priori, sociable, toujours prêt pour le partage et l'entraide, aimant la simplicité et la plaisanterie.</p>
        <div className="divPhoto divPhoto">
          <img src={imgHamac} alt="hamac" className="imgVert"/>
          <img src={imgEurodi}  alt="sourire" className="imgVert imgResp"/>                  
        </div>   
      </div>  
    </div>
  )
}

export default About