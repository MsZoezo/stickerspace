import "./navigatie.css";

import React, { useEffect, useRef, useState } from "react";

import Logo from "../logo/logo";


const Navbar = (props) => {
    const [isStuck, setIsStuck] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const cachedRef = ref.current;
        const observer = new IntersectionObserver(([element]) => setIsStuck(element.intersectionRatio < 1), {threshold: [1], rootMargin: '-1px 0px 0px 0px'});

        observer.observe(cachedRef);

        return () => observer.unobserve(cachedRef);
    }, []);

    const [showHamburg, setShowHamburg] = React.useState(false);

    const click = () => setShowHamburg(!showHamburg);

    return (
        <nav className={isStuck ? "navbar is-stuck" : "navbar"} ref={ref}>
            <div className="navbar__inner">
                <button onClick={click} className="navbar__hamburg-button">
                    { showHamburg ? null : <img src="/images/menu.svg" alt="Menu " />}
                    { showHamburg ? <img src="/images/close.svg" alt="Close menu " /> : null }
                    </button>

                <Logo />

                <section className="navbar__links">
                    {props.links}
                </section>

                {props.button || null}
            </div>

            { showHamburg ? <section className="navbar__hamburg-menu">{props.links}</section> : null }
        </nav>
    );
}

export default Navbar;