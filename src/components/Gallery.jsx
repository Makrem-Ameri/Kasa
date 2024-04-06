import '../styles/Gallery.css'
import Card from './Card.jsx'
import jsonData from '../data.json'
function Gallery(props){
    
    return(
<div className='gallery'>
      {jsonData.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
    
} 
export default Gallery