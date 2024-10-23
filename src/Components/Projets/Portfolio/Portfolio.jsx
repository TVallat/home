import "./Portfolio.scss";
import Contact from "../../Contact/Contact.jsx";
import bluelHome from "../../../Images/Bluel-home.webp"
import kasaHome from "../../../Images/Kasa-home.webp";
import grimoireHome from "../../../Images/Grimoire-home.webp";
import carducciHome from "../../../Images/Carducci-home.webp";
import booki from "../../../Images/booki.webp";

const Portfolio = () => {

    return (
        <section className="portfolio">
            <div className="upper-infos">
                <h1>Portfolio</h1>
                <p>...voici mes traveaux realises</p>
                <p>ainsi que les technologies utilisees</p>
            </div>
            <div className="lower-infos">
                <h2>Booki</h2>
                <div className="portfolio-infos">
                    <div className="image-left">
                        <img href="https://tvallat.github.io/Booki/" src={booki} alt="Le site hôtelier Booki" />
                    </div>
                    <div className="right-infos">
                        <p>...Creation du <span>Front-End</span> de la page d'accueil d'une agence de voyage avec <span>HTML</span> et <span>CSS</span>.</p>
                        <p>Respect des <span>maquettes</span>, des <span>specifications</span> et des <span>contraintes techniques</span>.</p>
                        <p>Le site a ete developpe de maniere <span>responsive</span>.</p>
                    </div>
                </div>
            </div>
            <div className="lower-infos">
                <h2>Sophie Bluel</h2>
                <div className="portfolio-infos">
                    <div className="image-left">
                        <img href="#" src={bluelHome} alt="Sophie Bluel, un site pour une architecte d\'interieur."/>
                    </div>
                    <div className="right-infos yellow-text">
                        <p>...Creation <span>Front-End</span> d'une page web dynamique presentant les traveaux d'une architecte d'interieur avec <span>JavaScript</span>.</p>
                        <p>Gestion des <span>evenements utilisateurs</span>.</p>
                        <p>Manipulation du <span>DOM</span> avec <span>JavaScript</span>.</p>
                        <p>Communication avec les <span>API</span> developpees en amont.</p>
                    </div>
                </div>
            </div>
            <div className="lower-infos">
                <h2>Nina Carducci Photographie</h2>
                <div className="portfolio-infos">
                    <div className="image-left">
                        <img href="#" src={carducciHome} alt="Un site présentant le portfolio de la Photographe Nina Carducci" />
                    </div>
                    <div className="right-infos yellow-text">
                        <p>...Amelioration des <span>performances</span> et de l'<span>accessibilite</span> d'un site de photographe.</p>
                        <p>Realisation d'<span>audits</span>.</p>
                        <p>Optimisation du <span>referencement</span> et du <span>SEO</span>.</p>
                        <p>Amelioration de la <span>structure du code</span>.</p>
                        <p>Realisation d'un <span>rapport d'intervention</span>.</p>
                    </div>
                </div>
            </div>
            <div className="lower-infos">
                <h2>Kasa</h2>
                <div className="portfolio-infos">
                    <div className="image-left">
                        <img href="#" src={kasaHome} alt="Kasa, un site hôtelier avec diverses chambres d\'hôte" />
                    </div>
                    <div className="right-infos yellow-text">
                        <p>...Creation d'une application web <span>Front-End</span> de location immobiliere avec <span>React</span> et <span>React-router</span></p>
                        <p>Utilisation de <span>Node.js</span> et de <span>SASS</span>.</p>
                        <p>Mise en place de <span>composants</span> reutilisables.</p>
                        <p>Respect des <span>maquettes</span> et des <span>contraintes techniques</span>.</p>
                    </div>
                </div>
            </div>
            <div className="lower-infos last">
                <h2>Mon Vieux Grimoire</h2>
                <div className="portfolio-infos">
                    <div className="image-left">
                        <img href="#" src={grimoireHome} alt="Un site de notation de livres où sont référencés plusieurs ouvrages" />
                    </div>
                    <div className="right-infos yellow-text">
                        <p>...Creation du <span>Back-End</span> d'un site de notation de livres.</p>
                        <p>Utilisation de <span>Node.js</span>, <span>Express</span> et <span>MongoDB</span >.</p>
                        <p>Developpement de <span>modeles de donnees</span> et implementation du <span>CRUD</span>.</p>
                        <p>Gestion du <span>telechargement</span> et de l'<span>optimisation d'images</span>.</p>
                        <p>Mise en place de <span>Middlewares</span> et d'un systeme d'authentification avec <span>JSON Web Token</span>.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </section>
    );
}

export default Portfolio;