import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

//Importation des composants.
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Booki from './Components/Projets/Booki/Booki.jsx';
import Kasa from './Components/Projets/Kasa/Kasa.jsx';
import Bluel from './Components/Projets/Bluel/Bluel.jsx';
import Carducci from './Components/Projets/Carducci/Carducci.jsx';
import Grimoire from './Components/Projets/Grimoire/Grimoire.jsx';


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/Booki' element={<Booki />} />
                    <Route path='/Kasa' element={<Kasa />} />
                    <Route path='/Bluel' element={<Bluel />} />
                    <Route path='/Carducci' element={<Carducci />} />
                    <Route path='/Grimoire' element={<Grimoire />} />
                </Routes>
            </main>
            <Footer />
        </Router>
  );
};

export default App;
