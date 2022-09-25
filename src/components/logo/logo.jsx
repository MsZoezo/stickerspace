import "./logo.css";

const Logo = () => {
    return(
        <figure className="logo">
            <a className="logo__anchor" href="/"><img className="logo__image" src="/images/stickerspace-logo.svg" alt="Stickerspace logo " /><span>Stickerspace</span></a>
        </figure>
    );
}

export default Logo;