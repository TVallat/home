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
import ErrorPage from './Components/Error/ErrorPage.jsx';


function App() {
    return (
    <Router>
        <div className="main-container">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<ErrorPage />} />  {/* Route de fallback si page inexistante */}
                    <Route path="/error" element={<ErrorPage />} />  {/* Route pour la page d'erreur */}
                </Routes>
                </main>
            <Footer />
        </div>
    </Router>
  );
};

export default App;
