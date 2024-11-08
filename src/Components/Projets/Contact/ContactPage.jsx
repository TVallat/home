import "./ContactPage.scss";
import Contact from "../../Contact/Contact.jsx";

const ContactPage = () => {
    return (
        <section className="contact">
            <div className="upper-infos">
                <h1>Contact</h1>
                <p>...veuillez bien me contacter par le formulaire ci-dessous :</p>
            </div>
            <Contact />
        </section>
    );
}

export default ContactPage;