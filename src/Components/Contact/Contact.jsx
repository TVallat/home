import { useLocation } from 'react-router-dom';

const Contact = () => {

    const location = useLocation();
    const showDiv = location.pathname !== '/contact';

    return (
        <section className="contact">
            {showDiv && (
            <div className="upper-infos">
                <p className="spacing">/</p>
                <h2>contact</h2>
            </div>
            )}
            <div className="formulaire">
                <form action="https://formspree.io/f/xovqdypo" method="POST">
                    <label htmlFor="name">_nom* :</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">_e-mail* :</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">_message* :</label>
                    <textarea id="message" name="message" required></textarea>

                    <button className="redirect-button" type="submit">envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;