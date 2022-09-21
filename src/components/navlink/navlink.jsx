import './navlink.css';

const Navlink = (props) => {
    return(
        <a className="navlink" href="/">{props.name} <img src="/images/arrow-right.svg" alt="Arrow" /></a>
    );
}

export default Navlink;