
import "./ContactPage.scss";

const ContactPage = () => {
    return (
        <section className="contact">
            <div className="upper-infos">
                <h1>Contact</h1>
                <p>...veuillez bien me contacter par le formulaire ci-dessous :</p>
            </div>
            <div className="formulaire">
                <form action="https://formspree.io/f/your-form-id" method="POST">
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

export default ContactPage;