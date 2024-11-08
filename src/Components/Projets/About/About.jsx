import "./About.scss";
import Contact from "../../Contact/Contact.jsx";



const AboutPage = () => {
    return (
        <div>
            <section>
                <div className="upper-infos">
                    <h1>About_me</h1>
                    <p>...recemment diplome de la formation developpeur web chez Openclassroom</p>
                    <p>je suis a la recherche d'un premier emploi</p>
                    <p>dans le secteur</p>
                </div>
                <div className="lower-infos self-description">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p>...Developpeur web <span>fullstack</span> debutant avec une connaissance solide de
                                <span> JavaScript</span>, <span>Node.js</span>,
                                <span> React</span>, et <span>MongoDB</span>.
                                Capable de creer des applications web basiques avec <span>HTML</span>,
                                <span> CSS</span> et <span>Express</span>.
                                Motive a apprendre et a developper des solutions innovantes</p>
                        </div>
                        <div className="right-infos">
                            <p>...Je suis un debutant curieux et determine a approfondir mes competences dans la creation d'applications
                                completes. J'adore explorer de nouvelles technologies comme JavaScript, React et Node.js,
                                et je suis toujours a la recherche de nouvelles opportunites pour apprendre et m'ameliorer.
                                Je souhaite a l'avenir me tourner vers la Programmation Oriente Objet, plus particulierement avec le language C#.
                                Au-dela du code, j'apprecie les defis qui me poussent a trouver des solutions creatives et a evoluer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="upper-infos">
                    <h2>mes valeurs</h2>
                </div>
                <div className="about-infos">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p className="spacing">!</p>
                            <h3>_autonome</h3>
                            <p>...je suis a l'aise dans le travail en equipe et j'apprecie la collaboration avec mes collegues.</p>
                        </div>
                        <div className="right-infos">
                            <p className="spacing">/</p>
                            <h3>_curieux</h3>
                            <p>...ma curiosite naturelle me pousse constamment a apprendre et a me tenir informe des dernieres tendances et technologies</p>
                        </div>
                    </div>
                </div>
                <div className="about-infos">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p className="spacing">#</p>
                            <h3>_polyvalent</h3>
                            <p>...Ma polyvalence me permet d'intervenir sur differents aspects des projets,
                                que ce soit en front-end, back-end ou encore dans la gestion des bases de donnees.</p>
                        </div>
                        <div className="right-infos">
                            <p className="spacing">%</p>
                            <h3>_motive</h3>
                            <p>...je suis engage dans mon travail et je suis pret a fournir l'effort necessaire pour atteindre les objectifs fixes</p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
}

export default AboutPage;