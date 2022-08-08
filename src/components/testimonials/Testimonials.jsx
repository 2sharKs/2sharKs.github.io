import React from 'react'
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";




const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Professional</h5>
            <h2>Testimonials</h2>

            <Swiper modules={[Pagination]} pagination={true} className="mySwiper container testimonials__container" spaceBetween={30} slidesPerView={1}>

                <SwiperSlide className="testimonial">
                    <div className="person__avatar">
                        <img src="https://picsum.photos/300" alt="" />
                    </div>
                    <h5 className="person__name">Random Ranger</h5>
                    <small className="person__review">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="person__avatar">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <h5 className="person__name">Boredom Banker</h5>
                    <small className="person__review">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="person__avatar">
                        <img src="https://picsum.photos/100" alt="" />
                    </div>
                    <h5 className="person__name">Fandom Flanker</h5>
                    <small className="person__review">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </small>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Testimonials
