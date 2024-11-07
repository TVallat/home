import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';


//Importation des composants.
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Projets/Home/Home.jsx';
import About from './Components/Projets/About/About.jsx';
import Portfolio from './Components/Projets/Portfolio/Portfolio.jsx';
import Resume from './Components/Projets/Resume/Resume.jsx';
import Contact from './Components/Projets/Contact/ContactPage.jsx';


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
  );
};

export default App;
