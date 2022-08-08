import React from 'react';
import "./footer.css";
import { TbBrandMeta } from 'react-icons/tb';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { GiSharkFin } from 'react-icons/gi';
import { CgBoy } from 'react-icons/cg';
import { MdLooksTwo } from 'react-icons/md';
import Copyright from './Copyright';


const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-logo">

                <CgBoy />
                <MdLooksTwo />
                <GiSharkFin />

            </div>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/"><TbBrandMeta /></a>
                <a href="https://twitter.com/"><AiOutlineTwitter /></a>
                <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                <a href="https://gtihub.com/"><VscGithub /></a>
            </div>

            <Copyright />
        </footer>
    )
}

export default Footer
