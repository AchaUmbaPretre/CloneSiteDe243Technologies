import './navbar.scss'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'
import { ArrowDropDown, Search } from '@mui/icons-material'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-wrapper">
                <img src={logo} alt="" className="navbar-logo" />
                <div className="navbar-right">
                    <ul className="navbar-ul">
                        <li className="navbar-li"><Link to={''} className="navbar-link">Accueil</Link></li>
                        <li className="navbar-li"><Link to={''} className="navbar-link">Equipe</Link></li>
                        <li className="navbar-li"><Link to={''} className="navbar-link">Services</Link></li>
                        <li className="navbar-li"><Link to={''} className="navbar-link">Blog <ArrowDropDown className='icons-link'/></Link></li>
                        <li className="navbar-li"><Link to={''} className="navbar-link">Pages <ArrowDropDown className='icons-link'/></Link></li>
                        <li className="navbar-li"><Link to={''} className="navbar-link">Contact</Link></li>
                        <Search className='navbar-search'/>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar