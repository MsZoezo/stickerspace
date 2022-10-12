import "./feature.css";

const Feature = (props) => {
    return(
        <article className="feature">
            <figure className="feature__sticker"><img src={props.img} alt={props.alt} /></figure>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default Feature;