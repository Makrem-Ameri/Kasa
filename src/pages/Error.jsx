import {Link} from 'react-router-dom'
import Header from '../components/Header.jsx'
import '../styles/Error.css';
function Error(){
   
    return(<div>
        <Header/>
    <div className='error'>

        <div className='title_error'>404</div>
        <div className='text_error'>Oups! la page que vous demandez n'exsite pas</div>
    
    <Link to="/Home"><div className='link_accueil'>Retourner sur la page d'accueil</div></Link>
    </div>
    </div>

    )
}
export default Error