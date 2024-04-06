
//import jsonData from '../data.json'
import Header from '../components/Header'
//import AppartementDetails from '../components/AppartementDetails.jsx'
import Description from '../components/Descriptions.jsx'
import Equipements from '../components/Equipements.jsx'
import  AppartementTitle from'../components/AppartementTitle.jsx'
import '../styles/Main.css'
import'../styles/Fichelogement.css'
import ImageAppartement from '../components/ImageAppartement.jsx'
function Fichelogement(){
   
    return(<div  className='fichelogement'>
  <Header/>
  <ImageAppartement/>
  <AppartementTitle/>
  <main>
    <Description/>
    <Equipements/>
  </main>
</div>
 )
}
export default Fichelogement