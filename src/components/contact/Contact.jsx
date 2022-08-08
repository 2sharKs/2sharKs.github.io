import React, { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8gz1oip', 'template_v22j693', form.current, 'GcStYrH-nRIsXT_Sf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <h3>Call to Action</h3>
                    <article className="contact__option">
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>boii2sharks@gmail.com</h5>
                        <a href="mailto:boii2sharks@gmail.com">send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsTelephoneInboundFill className='contact__option-icon' />
                        <h4>Call</h4>
                        <h5>+91 9876543210</h5>
                        <a href="tel:+919876543210">connect</a>
                    </article>
                </div>

                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <h3>Write To Us</h3>
                    <input type="text" name='name' placeholder="Your name" required />
                    <input type="email" name='email' placeholder="Your email" required />

                    <textarea spellCheck='false' name="message" cols="30" rows="7" placeholder='Your message...' maxLength='500' minLength='5'></textarea>
                    <button type='submit' className="btn btn-primary">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
