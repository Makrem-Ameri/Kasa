import {useState} from "react";
import '../styles/Rectangles.css'

function Rectangles(props){ 
 
  const [isOpen,setIsOpen]=useState(true);
  return isOpen ?(

                  <div className='title'>
                     <div>{props.title}</div>
                    <div onClick={()=>setIsOpen(false)}><i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
       
               
               
  ):(<div className='rectangle_title_contenent'>
    <div  className='title_contenent'> 
  <div>{props.title}</div>
      <div onClick={()=>setIsOpen(true)}><i className="fa-sharp fa-solid fa-chevron-up"></i></div></div>
      <div className='contenent'>{props.contenent}</div>
      </div>
      
      
  )
  
}
export default Rectangles
