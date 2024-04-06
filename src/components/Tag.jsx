// Tag.js
//import '../styles/Tag.css'
//import React from 'react';
//import tags from'../data.json'
//import { useParams } from 'react-router-dom';
/*function Tag(logement) {
   return(
    <div className="tags">
        
       <span> bonjour </span>
        
      </div>
   )
}

export default Tag;
*/
/*
import '../styles/Tag.css'
import { useParams } from 'react-router-dom';
import jsonData from '../data.json'
function Tag(tags) {
   const { id } = useParams();

   const logement = jsonData.find((logement) => logement.id ===id);
 
   return(
    <div className="tags">
        
        {logement.tags && logement.tags.length > 0 && (
            <ul className='tag_title'> 
            <li>{logement.tags}</li>
            </ul>
          )}
        
      </div>
   )
}

export default Tag;*/
// Tag.js

import React from 'react';
import '../styles/Tag.css'; // Importez votre fichier CSS pour styliser les tags
import jsonData from '../data.json'
import { useParams } from 'react-router-dom';
const Tag = ({ tags }) => {
   const {id}=useParams()
   const logement=jsonData.find((logement)=>logement=logement.id===id)
     
     
  return (
    <div className="tag-container">
      {logement.tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tag;



