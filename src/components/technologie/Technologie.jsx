import { GppGood } from '@mui/icons-material'
import './technologie.scss'

const Technologie = () => {
  return (
    <>
        <div className="technologie">
            <div className="techno-wrapper">
                <div className="service-cont-title">
                    <h1 className="service-title">TECHNOLOGIE</h1>
                    <h1 className="service-sous-title">Ce que nous offrons</h1>
                    <p className="apropos-barre"><span className="apropos-moov"></span></p>
                </div>
                <div className="techno-rows">
                    <div className="techno-row">
                        <div className="techno-title">
                            <h2 className="techno-h2">Developpement d'application</h2>
                        </div>
                        <hr />
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <a to={""} className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row">
                        <div className="techno-title">
                            <h2 className="techno-h2">Infrastructures Cloud</h2>
                        </div>
                        <hr />
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <a to={""} className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                    <div className="techno-row">
                        <div className="techno-title">
                            <h2 className="techno-h2">Data Processing</h2>
                        </div>
                        <hr />
                        <div className="techno-cat">
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <div className="techno-cat-row">
                                <span className="techno-syst">UI/UX Design</span>
                                <GppGood/>
                            </div>
                            <a to={""} className="techno-btn">Nous contacter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Technologie