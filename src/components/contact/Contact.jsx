import {  Call, LockClock } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './contact.scss'

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="service-cont-title">
                        <h1 className="service-title">Nous Contacter</h1>
                        <p className="apropos-barre"><span className="apropos-moov"></span></p>
                    </div>
                    <div className="contact-left-bottom">
                        <div className="contact-rows-heure">
                            <div className="contact-rows-heure">
                                <LockClock/>
                                <span className="contact-desc">24 heures</span>
                            </div>
                            <div className="contact-rows-heure">
                                <LockClock/>
                                <span className="contact-desc">24 heures</span>
                            </div>
                        </div>
                        <p className="contact-descript">Nous mettons à votre disposition une equipe d'assistance prete à vous servir</p>
                        <Link className="contact-appel"><Call className='contact-call'/></Link>
                    </div>
                </div>
                <div className="contact-right">
                    <form className='contact-form' action="">
                        <input type="text" className="contact-control" placeholder='Nom' />
                        <input type="text" className="contact-control" placeholder='Mail' />
                        <select name="" id="" placeholder='Selectionner la service' className='contact-control'>
                            <option value="">Dev Application</option>
                            <option value="">Infrastructures Cloud</option>
                            <option value="">Data Processing</option>
                        </select>
                        <textarea name="" id="" cols="30" rows="4" className='contact-textarea' placeholder='Message'></textarea>
                        <button className='contact-btn'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact