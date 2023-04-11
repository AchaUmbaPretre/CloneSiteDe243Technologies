import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Team from './pages/equipe/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/equipe' element={<Team/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
