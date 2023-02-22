import { Person, Phone } from '@mui/icons-material'
import './service.scss'

const Service = () => {
  return (
    <>
        <div className="services">
            <div className="service-wrapper">
                <div className="service-cont-title">
                    <h1 className="service-title">NOS SERVICES</h1>
                    <h1 className="service-sous-title">Des solutions informatiques personnalisées pour votre entriprise</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="service-rows">
                    <div className="service-row">
                        <div className="service-icons">
                            <Person className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Consultance</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row">
                        <div className="service-icons">
                            <Person className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Traitement de données</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row">
                        <div className="service-icons">
                            <Person className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Assurance Qualité</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row">
                        <div className="service-icons">
                            <Person className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Developpement d'application</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row">
                        <div className="service-icons">
                            <Person className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Automatisation de processus Developpement</h3>
                        <p className="service-desc">Nous mettons à votre disposition nos experts pour une assistance de meilleure qualité </p>
                    </div>
                    <div className="service-row">
                        <div className="service-icons">
                            <Phone className='service-icon'/>
                        </div>
                        <h3 className="service-h3">Nous Contacter</h3>
                        <p className="service-desc">+243810836943 </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service