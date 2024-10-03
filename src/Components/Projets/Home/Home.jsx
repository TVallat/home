import "./Home.scss";
import bannerImg from '../../../Images/les-cevennes.webp'

const Home = () => {
    return (
        <div>
            <section>
                <div>
                    <p>// Bonjour, je suis Thomas, un...</p>
                    <h1>{'{'}" Developpeur web "{'}'}</h1>
                </div>
                    <div className="banner-container">
                        <img className="banner-image" src={bannerImg} alt="Bannière"></img>
                    </div>
            </section>
            <section>
                <div className="upper-infos">
                    <p className="purple-text medium-size"> {'{'}/{'}'}</p>
                    <h2>{'<'}about_me{'>'}</h2>
                    <p className="yellow-text">...recemment diplome de la formation developpeur web chez Openclassroom</p>
                    <p className="yellow-text">je suis a la recherche d'un premier emploi</p>
                    <p className="yellow-text">dans le secteur</p>
                </div>
                <div className="lower-infos">
                    <div className="left-infos">
                        <p>Gauche</p>
                    </div>
                    <div className="right-infos">
                        <p>Droite</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;