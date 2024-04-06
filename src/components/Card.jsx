//import React from "react";
import jsonData from '../data.json'
import {Link} from 'react-router-dom'
import '../styles/Card.css'
function Card (props){
    
    return(
        jsonData.map((logement)=>(
            
               <div className="card" key={jsonData.id}>
                  <Link to={`/Logement/${logement.id}` }>
                <img src={logement.cover} alt=""/>
                <div className="title_appartement">{logement.title} </div>  
                </Link> 
                </div>
                
            
        )) 
        
        
    )
}
export default Card
