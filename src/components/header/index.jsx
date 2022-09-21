import "./header.css";

import Button from "../button";

const Header = () => {
    return(
        <header className="header">
            <figure className="header-stickers"><img src="/images/Stickers.svg" alt="Stickers" /></figure>

            <section className="header-section">
                <h1>Collezione</h1>
                <h2>De app voor al jouw stickers</h2>
                <Button name="Login" />
            </section>

            <figure className="header-stickers"><img src="/images/Stickers.svg" alt="Stickers" /></figure>
        </header>
    );
}

export default Header;