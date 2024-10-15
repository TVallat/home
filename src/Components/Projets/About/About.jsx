import "./About.scss";
import { useNavigate } from 'react-router-dom';


const Bluel = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="upper-infos">
                <p className="purple-text medium-size"> {'{'}/{'}'}</p>
                <h2>about_me</h2>
                <p className="yellow-text">...recemment diplome de la formation developpeur web chez Openclassroom</p>
                <p className="yellow-text">je suis a la recherche d'un premier emploi</p>
                <p className="yellow-text">dans le secteur</p>
            </div>
            <div className="lower-infos">
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
            </div>
        </section>
    );
}

export default Bluel;