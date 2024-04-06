 
import '../styles/ImageAppartement.css'
import jsonData from '../data.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
function ImageAppartement(pictures) {
  const {id}=useParams()
  const logement=jsonData.find((logement)=>logement=logement.id===id)
    
    
    const [slide,setSlide]=useState(0)


    const nextSlide = () => {
      setSlide((prevSlide) => (prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1));
    };
    
    const prevSlide = () => {
      setSlide((prevSlide) => (prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1));
    };
 //pour certains logement qui n'ont pas encores des images
    if (!pictures || pictures.length === 0) {
    return <div>Aucune image disponible.</div>;
  }
    return(
      <section className='image_banner'>
        
      <p className='chevron-left' onClick={prevSlide}><i className="fa-sharp fa-solid fa-chevron-left"></i></p>
        
      <p className='chevron-rigth' onClick={nextSlide}><i className="fa-sharp fa-solid fa-chevron-right"></i></p>

         <div className="banner">
        
         {logement.pictures.map((image,i)=>(
          <img  key={i} src={image} alt={pictures.alt} className={slide===i ? "slide":"  slide-hidden"}/>
        
       ))} 
       </div>
         
        </section> 
    );
   
} 
export default ImageAppartement;


