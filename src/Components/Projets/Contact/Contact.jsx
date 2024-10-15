import "./Contact.scss";

const Kasa = () => {
    return (
        <section className="contact">
            <div className="formulaire">
                <form action="https://formspree.io/f/your-form-id" method="POST">
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">E-mail :</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Kasa;