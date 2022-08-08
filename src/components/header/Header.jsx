import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/bruh.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header id="home">
            <div class="container header__container">
                <h5>Hello I'm</h5>
                <h1>Tushar Kumar Singh</h1>
                <h5 className="text-light">Web Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} className="img" alt="me.jpg" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Header;
