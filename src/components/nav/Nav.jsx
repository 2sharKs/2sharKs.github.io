import React from 'react';
import "./nav.css";
import { FaHome, FaUserAstronaut, FaBook, FaGamepad } from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import { ImProfile } from 'react-icons/im';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "active" : ""}><FaHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaGamepad /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><ImProfile /></a>

        </nav>
    )
}

export default Nav
