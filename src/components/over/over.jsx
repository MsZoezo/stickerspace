import "./over.css";

const Over = () => {
    return(
        <section className="over">
            <div className="over__wrapper">
            <figure className="over__image"><img src="/images/sticker-gif.gif" alt="Gif over Oprah die stickers aan iedereen geeft." /></figure>
            <span className="over__text">
                <h1>Over Stickerspace</h1>
                <p>
                    Stickerspace is dé app om stickers te ontdekken,<br /><br />
                    Via gepersonaliseerde collecties en geadvanceerde filters zijn er altijd nieuwe stickers om te delen!
                </p>
            </span>
            </div>
        </section>
    );
}

export default Over;