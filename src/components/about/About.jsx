import React from 'react';
import "./about.css";
import ME from '../../assets/862663-removebg-preview.png';
import { GiStarMedal, GiSoapExperiment } from 'react-icons/gi';
import { FaUserSecret } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__imgbox">
                    <div className="about__img">
                        <img className="meabout" src={ME} alt="meirl.png" />
                    </div>
                </div>
                <div className="about__content">
                    <article className="card__box" id="card">
                        <GiStarMedal />
                        <h5>Experience</h5>
                        <small > 0+ Years Working</small>
                    </article>
                    <article className="card__box" id="card">
                        <FaUserSecret />
                        <h5>Alias</h5>
                        <small > Boi_2sharks</small>
                    </article>
                    <article className="card__box" id="card">
                        <GiSoapExperiment />
                        <h5>Projects</h5>
                        <small > 10+ Completed</small>
                    </article>
                    <h5 className="about__text">Aenean a turpis tempus neque suscipit eleifend. Aliquam aliquet rhoncus faucibus. Aenean luctus viverra justo, ut porta lacus semper nec. Aliquam erat volutpat. Praesent fermentum. </h5>
                    <a href="#contact" className="btn btn-primary about__btn">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;