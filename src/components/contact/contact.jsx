import "./contact.css";

import Button from "../button/button";

const Contact = () => {
    return (
        <article className="contact">
            <header className="contact__header">
                <h2 className="contact__header__h2">Contact</h2>
                <p className="contact__header__p">We zullen zo snel mogelijk al je vragen beantwoorden!</p>
            </header>

            <form action="/" id="contact" method="post" className="contact__form">
                <label className="form__label" for="name">Naam</label>
                <input className="form__input" type="text" name="name" id="name" />

                <label className="form__label" for="email">Email</label>
                <input className="form__input" type="email" name="email" id="email" />

                <label className="form__label" for="bericht">Bericht / vraag</label>
                <textarea className="form__textarea" name="bericht" id="bericht" form="contact" cols="10"></textarea>

                <div className="form__button">
                    <Button name="Verstuur" type="submit" />
                </div>
            </form>
        </article>
    );
}

export default Contact;