import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f58ydd9', 'template_urme8pn', form.current)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h1 className="headline">Get In Touch</h1>
            <div className="contact">
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <HiOutlineMail className="contact__option-icon" />
                            <h4>Product Owner</h4>
                            <h5>jarno.ojala@vincit.com</h5>
                            <a href="mailto:jarno.ojala@vincit.com" target="_blank">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <BsPersonFill className="contact__option-icon" />
                            <h4>Project Coordinator</h4>
                            <h5>jari.porras@lut.fi</h5>
                            <a href="mailto:jari.porras@lut.fi" target="_blank">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <AiFillGithub className="contact__option-icon" />
                            <h4>Team's GitHub</h4>
                            <a href="https://github.com/eternals-swproject-2021/vincit-tool">Visit Source Code</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact