

// src/components/ApartmentDetails.js

//import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import jsonData from '../data.json';
const AppartmentDetails = () => {
  const { id } = useParams(); // Get the apartment ID from the URL
    // Fetch the specific apartment details based on the ID
  // You can use the same data from your JSON file
   const logement = jsonData.find((logement) => logement.id ===id);

  return (
    <div className="appartement_detail" key={logement.id}>
      
      {jsonData.map((logement)=>(
        <div><img src={logement.pictures} alt=""></img></div> 
       
       
      ))
  
      }
      </div>
  )
};

export default AppartmentDetails;
