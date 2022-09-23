import "./banner.css";

const Banner = (props) => {
    return(
        <section className="banner">
            <p>{props.text}</p>
        </section>
    );
}

export default Banner;