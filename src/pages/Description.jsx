
import React from 'react';
import DataJson from '../data/Data.json';
import { useParams,Navigate } from 'react-router-dom';
import Slider from '../components/Slider.jsx'
import Title from '../components/DescriptionTitle.jsx'
import Location from '../components/DescriptionLocation.jsx'
import Tags from '../components/DescriptionTags.jsx'
import Host from '../components/DescriptionHost.jsx'
import Accordeon from "../components/Accordeon.jsx"
import '../components/styles/Description.css'


function DescriptionPage() {
  const { id } = useParams(); 
  const datajson = DataJson.find(location=>location.id===id);
  if(datajson===undefined){
    return <Navigate to="/*"/>
  }

  return (
  <>
    <Slider  pictures={datajson.pictures}/>
    <Tags tag={{value:datajson.tags.map((tag,index)=>
                                            <div key={index} className="tag">
                                                {tag}
                                            </div>)}} />
    <div className="blocTitleHost">
      <div className="blocTitle">
        <Title title={datajson.title}/>
        <Location location={datajson.location}/>        
      </div>
      <div className="blocHost">
        <Host props={{link:datajson.host.link, name:datajson.host.name, picture:datajson.host.picture}}/>
      </div>    
    </div>      
    <div className="divAccordeon">
      <div className="DescriptionAccordeonDescription">
        <Accordeon props={{title:"Les missions du projet", content:datajson.description.map((contenu,indexEquip)=> <li className="liAccordeon" key={indexEquip}>{contenu}</li>)}}/>
      </div>
      <div className="EquipementAccordeonDescription">
        <Accordeon props={{title:"L'avis des professionnels sur mon travail", content:datajson.equipments.map((contenu,indexEquip)=> <li className="liAccordeon" key={indexEquip}>{contenu}</li>)}}/>
      </div>
    </div>                                                                      
  </>  
  );
}
  export default DescriptionPage





