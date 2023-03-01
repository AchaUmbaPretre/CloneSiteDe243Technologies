import './equipe.scss'
import eldie from './../../images/img.jpeg'
import chris from './../../images/chris.jpg'

const Equipe = () => {
  return (
    <>
        <div className="equipe">
            <div className="equipe-wrapper">
                <div className="service-cont-title">
                    <h1 className="service-title">NOTRE EQUIPE</h1>
                    <h1 className="service-sous-title">Des professionnels prets à aider votre entreprise</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="equipe-rows">
                    <div className="equipe-row">
                        <img src={eldie} alt="" className="equipe-img" />
                        <div className="equipe-details">
                            <h3 className="equipe-h3">Eldie MAPEPE</h3>
                            <span className="equipe-grade">Founder & Seo</span>
                        </div>
                    </div>
                    <div className="equipe-row">
                        <img src={chris} alt="" className="equipe-img" />
                        <div className="equipe-details">
                            <h3 className="equipe-h3">Christian Kayembe</h3>
                            <span className="equipe-grade">TECH LEAD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Equipe