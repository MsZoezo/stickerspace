import './button.css';

const Button = (props) => {
    return(
        <button className='cta-button'>{props.name}</button>
    );
}

export default Button;