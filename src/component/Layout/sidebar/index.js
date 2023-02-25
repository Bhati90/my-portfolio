import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logos from 'C:/Users/bhati/Downloads/port/react-portfolio/src/assets/images/logo-s.png'
import LogoSubtitle from 'C:/Users/bhati/Downloads/port/react-portfolio/src/assets/images/logo_sub.png'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faEnvelope,faHome,faUser,faLinkSlash} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>(
    <div className=' nav-bar'>
    <Link className='logo' to ='/'>
        <img src={Logos} alt = 'logo'/>
        {/* <img className='sub-logo' src={LogoSubtitle} alt = 'logos'/> */}
    </Link>
    <nav>
        <NavLink exact = "true" activeclassname = "active" to = '/'>
            <FontAwesomeIcon  icon = {faHome} color = "#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className="about-link" to = '/about'>
            <FontAwesomeIcon  icon = {faUser} color = "#4d4d4e"/>
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className="contact-link" to = '/contact'>
            <FontAwesomeIcon  icon = {faEnvelope} color = "#4d4d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li><a href='https://www.linkedin.com/in/kishan-bhati-565b66236/'/>
        <FontAwesomeIcon icon={ faLinkedin} color = '#4d4d4e'/> </li>
        <li><a href='https://leetcode.com/bhatikaran634/'/>
        <FontAwesomeIcon icon={faGithub} color = '#4d4d4e'/> </li>
        <li><a href='https://twitter.com/KishanB51501029/'/>
        <FontAwesomeIcon icon={faTwitter} color = '#4d4d4e'/> </li>
        <li><a href='https://leetcode.com/bhatikaran634/'/>
        <FontAwesomeIcon icon={faInstagram} color = '#4d4d4e'/> </li>
    </ul>
  
    </div>
    )

export default Sidebar