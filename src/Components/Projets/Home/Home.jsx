import "./Home.scss";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../../../Images/les-cevennes.webp';
import portfolioSlidesData from "../../Carousel/Home-carousel";
import CarouselFade from "../../Carousel/Carousel";
import Contact from "../../Contact/Contact.jsx";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="home">
                <div>
                    <p className="double-slash">Bonjour, je suis Thomas, un...</p>
                    <h1>Developpeur web</h1>
                </div>
                <div className="banner-container">
                    <img className="banner-image" src={bannerImg} alt="Bannière"></img>
                </div>
            </section>
            <section>
                <div className="upper-infos">
                    <p className="spacing">/</p>
                    <h2>about_me</h2>
                    <p>...recemment diplome de la formation developpeur web chez Openclassroom</p>
                    <p>je suis a la recherche d'un premier emploi</p>
                    <p>dans le secteur</p>
                </div>
                <div className="lower-infos about-infos">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p>...Developpeur web <span class="purple-text">fullstack</span> debutant avec une connaissance solide de
                                <span class="purple-text"> JavaScript</span>, <span class="purple-text">Node.js</span>,
                                <span class="purple-text"> React</span>, et <span class="purple-text">MongoDB</span>.
                                Capable de creer des applications web basiques avec <span class="purple-text">HTML</span>,
                                <span class="purple-text"> CSS</span> et <span class="purple-text">Express</span>.
                                Motive a apprendre et a developper des solutions innovantes</p>
                        </div>
                        <div className="right-infos yellow-text">
                            <p>...Je suis un debutant curieux et determine a approfondir mes competences dans la creation d'applications
                                completes. J'adore explorer de nouvelles technologies comme JavaScript, React et Node.js,
                                et je suis toujours a la recherche de nouvelles opportunites pour apprendre et m'ameliorer.
                                Je souhaite a l'avenir me tourner vers la Programmation Oriente Objet, plus particulierement avec le language C#.
                                Au-dela du code, j'apprecie les defis qui me poussent a trouver des solutions creatives et a evoluer.
                            </p>
                        </div>
                    </div>
                    <button className="redirect-button" onClick={() => navigate('/about')}>a propos</button>
                </div>
            </section>
            <section>
                <div className="upper-infos">
                    <p className="spacing">!</p>
                    <h2>portfolio</h2>
                    <p>...voici un apercu des projets que j'ai pu realiser</p>
                    <p>au cours de ma formation</p>
                </div>
                <div className="lower-infos">
                    <div className="portfolio-infos">
                        <CarouselFade slides={portfolioSlidesData} />
                    </div>
                    <button className="redirect-button" onClick={() => navigate('/portfolio')}>plus d'infos</button>
                </div>
            </section>
            <Contact />
        </div>
    );
}

export default Home;