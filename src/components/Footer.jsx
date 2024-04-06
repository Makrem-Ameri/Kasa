import '../styles/Footer.css'
import  logofooter from './../assets/logofooter.png'
function Footer(){
    return(
        <div className="footer">
            <div><img src={logofooter} alt="logo "/></div>
            <div className="footer_text"> ©2020 Kasa.All rights reserved</div>

        </div>
    )
}
export default Footer