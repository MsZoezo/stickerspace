import "./header.css";

import Button from "../button/button";

const Header = () => {
    return(
        <header className="header">
            <figure className="header-stickers"><img src="/images/Stickers.svg" alt="Stickers" /></figure>

            <section className="header-section">
                <h1>Stickerspace</h1>
                <h2>De app voor al jouw stickers</h2>
                <Button name="Login" />
            </section>

            <figure className="header-stickers"><img src="/images/Stickers.svg" alt="Stickers" /></figure>
            <svg className="header-wave " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faf6f4" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </header>
    );
}

export default Header;