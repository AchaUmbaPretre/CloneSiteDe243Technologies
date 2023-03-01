import { Call,FacebookOutlined, Instagram, LinkedIn, LocationOn, Mail, Twitter } from '@mui/icons-material'
import './footer.scss'
import { Link } from 'react-router-dom'
import logo from './../../images/logo.png'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper-top">
                    <div className="footer-left">
                        <img src={logo} alt="" className="footer-img" />
                    </div>
                    <div className="footer-center1">
                        <div className="service-cont-title">
                            <h2 className="service-title">Nous trouver</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-row-icon">
                                <LocationOn className='footer-icon' />
                                <span className="footer-desc">6 tabora, Kinshasa gombe, RDC</span>
                            </div>
                            <div className="footer-row-icon">
                                <Mail className='footer-icon'/>
                                <span className="footer-desc">hello@243technologies.com</span>
                            </div>
                            <div className="footer-row-icon">
                                <Call className='footer-icon'/>
                                <span className="footer-desc">+243824562776</span>
                            </div>
                            <div className="footer-reseaux">
                                <Twitter className='footer-rsx'/>
                                <FacebookOutlined className='footer-rsx'/>
                                <LinkedIn className='footer-rsx'/>
                                <Instagram className='footer-rsx'/>
                            </div>
                        </div>
                    </div>
                    <div className="footer-center2">
                        <div className="service-cont-title">
                            <h2 className="service-title">Liens</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <ul className="footer-ul">
                            <li className="footer-li"><Link className='footer-Link'>Accueil</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>A propos</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Nos Services</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Notre equipe</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Dernier Blog</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Nous Contacter</Link></li>
                        </ul> 
                    </div>
                    <div className="footer-right">
                        <div className="service-cont-title">
                            <h2 className="service-title">Liens Popualaire</h2>
                            <p className="apropos-barre"><span className="apropos-moov"></span></p>
                        </div>
                        <ul className="footer-ul">
                            <li className="footer-li"><Link className='footer-Link'>Accueil</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>A propos</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Nos Services</Link></li>
                            <li className="footer-li"><Link className='footer-Link'> Notre equipe</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Dernier Blog</Link></li>
                            <li className="footer-li"><Link className='footer-Link'>Nous Contacter</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-wrapper-bottom">
                    <p className="footer-bottom-desc"><span className="footer-techno">+243Technologies.</span>All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer