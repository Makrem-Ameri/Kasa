//import React from 'react';
import '../styles/Host.css'
import jsonData from '../data.json'
import { useParams } from 'react-router-dom';
function Host() {
  const {id}=useParams()
  const logement=jsonData.find((logement)=>logement=logement.id===id)
    return (
    <>
      
        <div className="proprietaire">
          <div  className="name_proprietaire" key={logement.id}>{logement.host.name}</div>
        <div><img   src={logement.host.picture}  alt="Propriétaire"/></div>
        </div>
        </>
    );
    
}

export default Host;