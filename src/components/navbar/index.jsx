import React, { useState } from "react";

import Navlink from "../navlink";
import Logo from "../logo";
import Button from "../button";

import "./navbar.css"

const Navbar = (props) => {
    let logo = null;
    let button = null;
    let navlinks = [];

    React.Children.forEach(props.children, child => {
        if (child.type === Logo) logo = child;
        if (child.type === Navlink) navlinks.push(child);
        if (child.type === Button) button = child;
    });

    const [showHamburg, setShowHamburg] = React.useState(false);

    const click = () => setShowHamburg(!showHamburg);

    return (
        <nav className="navbar">
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