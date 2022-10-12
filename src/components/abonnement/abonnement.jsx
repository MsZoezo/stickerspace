import "./abonnement.css";

const Abonnement = ({ best, name, price, duration, features }) => {
    return(
        <section className="abonnement">
            {best ? <p className="abonnement__bestValue">Beste waarde</p> : null }

            <p className="abonnement__duration">{duration}</p>
            <h2 className="abonnement__name">{name}</h2> 
            <p className="abonnement__price">{price}</p>

            <ul className="abonnement__features">
                {features.map(feature => (
                    <li className="abonnement__feature">{feature}</li>
                ))}
            </ul>
        </section>
    );
}

export default Abonnement;