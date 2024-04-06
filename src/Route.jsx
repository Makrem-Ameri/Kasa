import React from 'react';
//import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
//import AppartementDetails from './components/AppartementDetails';
import Fichelogement from './pages/Fichelogement'
 
import Error from './pages/Error' 
import Home from './pages/Home'
import Apropos from './pages/Apropos'
function App(){

//const root = ReactDOM.createRoot(document.getElementById('root'));
return(
  
   <Router>
      <Routes>
      
        <Route path="/Home" element={<Home/>}/>
        
    
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/Apropos" element={<Apropos/>}/>
   
    <Route path="Logement/:id" element={<Fichelogement/>}/>
   
    </Routes>
    </Router>
  
);

}
export default App