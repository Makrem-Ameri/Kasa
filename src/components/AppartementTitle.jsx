import { useParams } from 'react-router-dom'
import jsonData from '../data.json'
 import '../styles/AppartementTitle.css'
 import Rate from'./Rate.jsx'
 import Host from './Host.jsx'
 import  '../styles/Rate.css'
 import Tag from './Tag.jsx'
function AppartementTitle(rating){
    
    const{id}=useParams()
    const logement=jsonData.find((logement)=>logement.id===id)
    
    return(
    <div  className='appartement_caract'>
        <div className='appart_description'>
        <div className="appartement_location">
        <div className='titles'>{logement.title}</div>
        
       <div><h2 className='locations'>{logement.location}</h2></div> 
       
      <Tag/>
       </div>
       
      <div className='hoste_rate'>
      <Host/>
      
      <Rate  rating={logement.rating} className='rate'/>
      </div>
      </div>
      </div>
      
    )
}


export default AppartementTitle