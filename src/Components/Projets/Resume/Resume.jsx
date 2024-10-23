import "./Resume.scss";
import Contact from "../../Contact/Contact.jsx";


const Resume = () => {
    return (
        <div>
            <section>
                <div className="upper-infos">
                    <h1>experience</h1>
                    <p>...mon historique</p>
                </div>
                <div className="resume-infos">
                    <div className="text-infos">
                        <div className="exp-infos">
                            <h3>2022-2023</h3>
                            <p>Distribution Sanitaire Chauffage</p>
                        </div>
                        <div className="right-infos">
                            <h3>Approvisionneur</h3>
                            <p>...gestion d'une disponibilite optimale des stocks et des couts, afin d'anticiper les besoins. Etroite collaboration
                                avec les fournisseurs et l'equipe logistique.</p>
                        </div>
                    </div>
                </div>
                <div className="resume-infos">
                    <div className="text-infos">
                        <div className="exp-infos">
                            <h3>2022</h3>
                            <p>Distribution Sanitaire Chauffage</p>
                        </div>
                        <div className="right-infos">
                            <h3>Stagiaire Approvisionneur</h3>
                            <p>...mission de stage aupres de DSC afin de venir en aide a un service en sous effectif, realisation d'un me   moire
                            stage pour ma licence.</p>
                        </div>
                    </div>
                </div>
                <div className="resume-infos">
                    <div className="text-infos">
                        <div className="exp-infos">
                            <h3>2021-2022</h3>
                            <p>Universite Toulouse Jean Jaures</p>
                        </div>
                        <div className="right-infos">
                            <h3>L3 LEA Commerce International</h3>
                            <p>...anglais niveau C1.</p>
                            <p>Formation en achat, marketing et administration des ventes.</p>
                            <p>Japonais deuxieme langue niveau N4.</p>
                        </div>
                    </div>
                </div>
                <div className="resume-infos">
                    <div className="text-infos">
                        <div className="exp-infos">
                            <h3>2017-2020</h3>
                            <p>Universite Grenoble Alpes</p>
                        </div>
                        <div className="right-infos">
                            <h3>L0-L2 LEA<br />Information & communication</h3>
                            <p>...anglais niveau B1 a B2.</p>
                            <p>Formation sur les enjeux de l'information et de la communication.</p>
                            <p>Japonais deuxieme langue niveau N5.</p>
                        </div>
                    </div>
                </div>
                <div className="upper-infos">
                    <h2>competences</h2>
                    <p>...mes technologies maitrisee</p>
                </div>
                <div className="about-infos">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p className="spacing">!</p>
                            <h3>_css & html</h3>
                            <p>...solides connaissances en <span>HTML</span> et <span>CSS</span>, ce qui me permet de creer des interfaces web attrayantes et reactives,
                                tout en respectant les meilleures pratiques en matiere d'accessibilite et de performance.</p>
                        </div>
                        <div className="right-infos">
                            <p className="spacing">/</p>
                            <h3>_javaScript</h3>
                            <p>...mon experience de <span>JavaScript</span> me permet de creer des applications web dynamiques et interactives, en optimisant l'experience
                                utilisateur et en integrant des fonctionnalites avancees pour repondre aux besoins specifiques des projets</p>
                        </div>
                    </div>
                </div>
                <div className="about-infos">
                    <div className="text-infos">
                        <div className="left-infos">
                            <p className="spacing">#</p>
                            <h3>_react</h3>
                            <p>...je possede une bonne connaissance de <span>React</span>, ce qui me permet de developper des interfaces utilisateur reactives et modulaires,
                                pour assurer une gestion efficace et offrir une experience fluide aux utilisateurs.</p>
                        </div>
                        <div className="right-infos">
                            <p className="spacing">%</p>
                            <h3>_express</h3>
                            <p>...ma maitrise d'<span>Express</span> me permet de construire des applications web robustes et evolutives, en facilitant la gestion des routes
                                et des requetes tout en assurant une integration fluide avec les bases de donnees</p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    );
}

export default Resume;