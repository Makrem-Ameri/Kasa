import {Link} from 'react-router-dom'
import '../styles/Header.css';
import logo from './../assets/logo.png'
function Header() {
  return (
    <div className="header">
      <div><img src={logo} alt="logo"/></div>
       <nav className='navbar'>
       <div className='navbar_link'><Link to="/Home">Accueil</Link></div>
        <div className='navbar_link'><Link to="/Apropos">Apropos</Link></div>
       </nav>
    </div>
  )
}

export default Header;
