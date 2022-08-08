import React from 'react'
import "./services.css";
import { TiStarHalfOutline } from 'react-icons/ti'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head mob">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>

                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Automation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>

                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <TiStarHalfOutline className='service__list-icon' />
                            <p>Lorem isum dolor sit amet consectetur elit.</p>
                        </li>

                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
