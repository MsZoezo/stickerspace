import "./footer.css";

export default function Footer() {
    return(
        <section className="footer">
            <div className="footer__content">
                <p>© 2022 Stickerspace Inc.</p>
                <a href="/">Terms & conditions</a>
                <a href="/">Privacy policy</a>
                <a href="/">Cookie policy</a>
            </div>
        </section>
    );
}