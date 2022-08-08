import React from 'react';
import "./portfolio.css";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>All about my</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/300/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/300/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/300/200?grayscale" alt="project_img" />
                    </div>
                    <h3>Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary'>Demo</a>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default Portfolio;
