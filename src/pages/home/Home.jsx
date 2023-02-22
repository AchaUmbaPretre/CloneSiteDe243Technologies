import { Groups3Outlined, PersonTwoTone } from '@mui/icons-material'
import Apropos from '../../components/apropos/Apropos'
import Navbar from '../../components/navbar/Navbar'
import Service from '../../components/services/Service'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'

const Home = () => {
  return (
    <>
        <div className="home">
            <Topbar/>
            <div className="home-wrapper">
                <div className="home-container">
                    <Navbar/>
                    <hr className="home-hr" />
                    <div className="home-title">
                        <h1 className="home-h1">CREER & INNOVER</h1>
                    </div>
                </div>
                <div className="client-wrapper">
                    <div className="client-left">
                        <div className="client-rows">
                            <div className="client-row-left">
                                <Groups3Outlined className='client-icon'/>
                            </div>
                            <div className="client-row-right">
                                <div className="client-row-center">
                                    <h3 className="client-h3">Clients Satisfaits</h3>
                                    <h1 className="client-h1">15</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-right">
                        <div className="client-rows">
                            <div className="client-row-left">
                                <PersonTwoTone className='client-icon'/>
                            </div>
                            <div className="client-row-right">
                                 <div className="client-row-center">
                                    <h3 className="client-h3">Projets Effectués</h3>
                                    <h1 className="client-h1">203</h1> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Apropos/>
                <Service/>
            </div>
        </div>
    </>
  )
}

export default Home