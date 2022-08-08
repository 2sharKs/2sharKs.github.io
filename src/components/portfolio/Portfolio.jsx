import React from 'react';
import "./portfolio.css";
import quiz from '../../assets/quiz_site.JPG';
import todo from '../../assets/todo.JPG';
import simon from '../../assets/simon.JPG';
import tindog from '../../assets/tindog.JPG';
import mysiteCSS from '../../assets/mysiteCSS.JPG';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>All about my</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={quiz} alt="The-Implausible-Quiz" />
                    </div>
                    <h3>The-Implausible-Quiz</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/2sharKs/The-Implausible-Quiz" className='btn'>Github</a>
                        <a href="https://white-water-080b9c410.1.azurestaticapps.net/" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={todo} alt="project_img" />
                    </div>
                    <h3>Two-dwo list</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className='btn'>Github</a>
                        <a href="https://two-dwo.herokuapp.com/" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={simon} alt="project_img" />
                    </div>
                    <h3>Simon Game</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/2sharKs/Simon-game" className='btn'>Github</a>
                        <a href="https://2sharks.me/Simon-game/" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={tindog} alt="project_img" />
                    </div>
                    <h3>TinDog</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/2sharKs/TinDog" className='btn'>Github</a>
                        <a href="https://2sharks.me/TinDog/" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={mysiteCSS} alt="project_img" />
                    </div>
                    <h3>My site using CSS</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/2sharKs/My-Site-CSS" className='btn'>Github</a>
                        <a href="https://2sharks.me/My-Site-CSS/" className='btn btn-primary'>Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src="https://picsum.photos/300/150" alt="project_img" />
                    </div>
                    <h3>Journal webapp</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/2sharKs/Journal-webApp" className='btn'>Github</a>
                        <a href="https://github.com/2sharKs/Journal-webApp" className='btn btn-primary'>Demo</a>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default Portfolio;
