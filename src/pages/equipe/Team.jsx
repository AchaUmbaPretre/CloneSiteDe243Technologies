import Apropos from '../../components/apropos/Apropos'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'
import Equipe from '../../components/equipe/Equipe'
import './team.scss'

const Team = () => {
  return (
    <>
        <div className="equipe">
        <Topbar/>
            <div className="home-wrapper">
                <div className="home-container">
                    <Navbar/>
                    <hr className="home-hr" />
                    <div className="home-title">
                        <h1 className="home-h1">Team</h1>
                    </div>
                </div>
            </div>
        <Apropos/>
        <Equipe/> 
        <Footer/>
        </div>
    </>
  )
}

export default Team