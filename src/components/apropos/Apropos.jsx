import { Person2 } from '@mui/icons-material'
import about from './../../images/about-us.jpg'
import './apropos.scss'

const Apropos = () => {
  return (
    <>
        <div className="apropos">
            <div className="apropos-wrapper">
                <div className="apropos-left">
                  <div className="apropos-cont-title">
                    <h1 className="apropos-h1">A PROPOS DE NOUS</h1>
                    <h1 className="apropos-sous-title">Offrir l'excellence mondiale de traitement de données</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                  </div>
                  <p className="apropos-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reiciendis? Cumque est, temporibus numquam tempore libero harum! Minima, nam! Sit hic cumque quaerat excepturi accusantium officiis, obcaecati repellat quod debitis.
                  </p>
                  <div className="apropos-rows">
                    <div className="apropos-row">
                      <Person2/>
                      <h4 className="apropos-h4">Rapidité</h4>
                    </div>
                    <div className="apropos-row">
                      <Person2/>
                      <h4 className="apropos-h4">Serviabilité</h4>
                    </div>
                    <div className="apropos-row">
                      <Person2/>
                      <h4 className="apropos-h4">Integrité</h4>
                    </div>
                    <div className="apropos-row">
                      <Person2/>
                      <h4 className="apropos-h4">Creativité</h4>
                    </div>
                  </div>
                </div>
                <div className="apropos-right">
                  <img src={about} alt="" className="apropos-img" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Apropos