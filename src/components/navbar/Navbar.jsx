import './navbar.scss'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'
import { ArrowDropDown, BarChart, Search } from '@mui/icons-material'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [bar, setBar] = useState(false)
    
    const handBar = () =>{
        setBar(!bar)
    }
    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    },[])
  return (
    <>
        <div className = {active ? "navbar bleu" : "navbar" }>
            <div className="navbar-wrapper">
                <img src={logo} alt="" className="navbar-logo"/>
                <div className="navbar-right">
                    <BarChart className='navbar-bar' onClick={handBar}/>
                    <ul className={ bar ? "navbar-ul navbarOpen" : "navbar-ul"}>
                        <li className="navbar-li"><Link to={'/'} className="navbar-link">Accueil</Link></li>
                        <li className="navbar-li"><Link to={'/equipe'} className="navbar-link">Equipe</Link></li>
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