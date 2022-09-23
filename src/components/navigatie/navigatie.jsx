import "./navigatie.css";

import React, { useEffect, useRef, useState } from "react";

import Navlink from "../navlink/navlink";
import Logo from "../logo/logo";
import Button from "../button/button";


const Navbar = (props) => {
    let logo = null;
    let button = null;
    let navlinks = [];

    React.Children.forEach(props.children, child => {
        if (child.type === Logo) logo = child;
        if (child.type === Navlink) navlinks.push(child);
        if (child.type === Button) button = child;
    });

    const [isStuck, setIsStuck] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const cachedRef = ref.current;
        const observer = new IntersectionObserver(([element]) => {
            console.log(element.intersectionRatio < 1);
            setIsStuck(element.intersectionRatio < 1);
        }, {threshold: [1], rootMargin: '-1px 0px 0px 0px', root: document.getElementById('root')});

        observer.observe(cachedRef);

        return () => observer.unobserve(cachedRef);
    }, []);

    const [showHamburg, setShowHamburg] = React.useState(false);

    const click = () => setShowHamburg(!showHamburg);

    return (
        <nav className={isStuck ? "navbar" : "navbar stuck"} ref={ref}>
            <div className="inner-navbar">
                <button onClick={click} className="navbar-hamburg">
                    { showHamburg ? null : <img src="/images/menu.svg" alt="Menu " />}
                    { showHamburg ? <img src="/images/close.svg" alt="Close menu " /> : null }
                    </button>

                {logo}

                <section className="navbar-links">
                    {navlinks}
                </section>

                {button}
            </div>

            { showHamburg ? <section className="hamburg-menu">{navlinks}</section> : null }
        </nav>
    );
}

export default Navbar;