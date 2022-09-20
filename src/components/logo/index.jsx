import "./logo.css";

const Logo = () => {
    return(
        <figure className="logo">
            <a className="logo-anchor" href="/"><img className="logo-image" src="/images/stickerspace-logo.svg" alt="Stickerspace logo " /><span>Stickerspace</span></a>
        </figure>
    );
}

export default Logo;