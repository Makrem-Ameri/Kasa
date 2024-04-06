import{useState} from 'react'
import jsonData from'../data.json'
import '../styles/Rectangles.css'
import { useParams } from 'react-router-dom';
function Descriptions(){
  const { id } = useParams();

  const logement = jsonData.find((logement) => logement.id ===id);

const [isOpen,setIsOpen]=useState(true);
    return isOpen ?(
<div className="dropdown_closed">
                  
                     <div className='title_contenents'>Descriptions</div>
                    <div onClick={()=>setIsOpen(false)}><i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
               
  ):(<div className='list_drop'>
    <div  className='dropdown_open'> 
  <div className='title_contenents'>Descriptions</div>
      <div onClick={()=>setIsOpen(true)}><i className="fa-sharp fa-solid fa-chevron-up"></i></div></div>
      <div className='text_dropdown'>{logement.description}</div>
      </div>
      
        
    )
    
};

export default Descriptions