import React from 'react'
import "./experience.css";
import { ImHtmlFive } from 'react-icons/im';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCss3, SiBootstrap, SiReact, SiExpress, SiPython } from 'react-icons/si';


const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <ImHtmlFive className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiCss3 className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiBootstrap className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <IoLogoJavascript className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiReact className="experience__details-icon" />
                            <div>
                                <h4>ReactJs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaNodeJs className="experience__details-icon" />
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiExpress className="experience__details-icon" />
                            <div>
                                <h4>Express</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiPython className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience
